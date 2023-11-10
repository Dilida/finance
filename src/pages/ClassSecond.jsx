import React, {useEffect, useState} from "react";
import {getClassList, getFilmUrl} from "../utils/api";
import {userLoginKey, classListKey, selectClassTitle} from "../config";
import {useNavigate} from "react-router-dom";
import {Col, Row, Card} from "react-bootstrap";
import {getQueryString} from "../utils/utils";
import axios from "axios";
import Meta from "../components/Meta";


const ClassSecond = () => {
  const navigate = useNavigate();
  const id = getQueryString("id")
  const classList = JSON.parse(sessionStorage.getItem(classListKey))
  const initClass = classList.find(item => item.id === id)

  useEffect(() => {
    let isUnmounted = false
    if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
      navigate("/")
    }

    return () => isUnmounted = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleClass = (event, folderId) => {
    event.preventDefault();
    getFilmUrl(folderId).then(
      (res) => {

        const folderUrl = axios.defaults.url + res.url
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html
        window.open(folderUrl, '_blank', 'noopener,noreferrer');

      },
      (e) => {
        console.log("get response failed!");
      })
  }

  const handleTest = (event, item, itemSub, folderId) => {
    event.preventDefault();
    sessionStorage.setItem(selectClassTitle, item + " " + itemSub)
    navigate("/classTest?folderId=" + folderId)
  }

  const handleValue = (event, item, itemSub, folderId) => {
    event.preventDefault();
    sessionStorage.setItem(selectClassTitle, item + " " + itemSub)
    navigate("/classValue?folderId=" + folderId)
  }

  return (
    <main id="main">
      <Meta title="課程列表" />
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">{initClass.id}.{initClass.name}</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li><a href="/classFirst" title="回到課程列表" role="button">回到課程列表</a></li>
            </ol>
          </div>
        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="class-second" className="class-second">
        <div className="container">
          <div className="row gy-4">
            {initClass.subjectList.map((item, index) => (
              <div className="px-3 col-lg-6" key={`class-second-01-${index}`}>
                <Card border="success">
                  <Card.Header className="">{item.id}.{item.name}</Card.Header>
                  <Card.Body>
                    <Row>
                      {item.subjectList.map((item2, index2) =>
                        <Col className="text-center" key={`class-second-02-${index2}`}><a href="" key={"item2" + index2}
                                                                                          role="button"
                                                                                          title={item2.id + item2.name}
                                                                                          className="card-link me-lg-3"
                                                                                          onClick={(e) => handleClass(e, item2.folderId)}>{item.name}_{item2.name} (另開新視窗）</a></Col>
                      )}
                    </Row>
                    <hr/>
                    <Row>
                      <Col xs={3} className="text-center">
                        <a href="" role="button" title="單元評分" className="card-link me-lg-3"
                           onClick={(e) => handleValue(e, `${initClass.id}.${initClass.name}`, `${item.id}.${item.name}`, item.folderId)}>{item.name}_單元評分</a>
                      </Col>
                      <Col xs={3} className="text-center">
                        <a href="" role="button" title="課程檢測" className="card-link me-lg-3"
                           onClick={(e) => handleTest(e, `${initClass.id}.${initClass.name}`, `${item.id}.${item.name}`, item.folderId)}>{item.name}_課程檢測</a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  )
}

export default ClassSecond
