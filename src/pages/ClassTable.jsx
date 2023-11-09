import React, {useEffect, useState} from "react";
import {getClassList, getFilmUrl} from "../utils/api";
import {userLoginKey, selectClassTitle, classListKey} from "../config";
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Meta from "../components/Meta";


const ClassTable = () => {
  const [itemList, setItemList] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    let isUnmounted = false
    if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
      navigate("/")
    }
    const classList = sessionStorage.getItem(classListKey)
    if (classList === null) {
      getClassList().then(
        (res) => {
          setLoading(false)
          setItemList(res)
          sessionStorage.setItem(classListKey, JSON.stringify(res))
        },
        (e) => {
          console.log("get response failed!");
        })
    } else {
      setLoading(false)
      setItemList(JSON.parse(classList))
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
            <h2 aria-current="page">課程列表</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li><a href="/classList">方塊排列</a></li>
            </ol>
          </div>

        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          {loading ?
            <div className="text-center"><Spinner animation="border" variant="success"/></div>
            :
            itemList.map((item, index) => (
              <Card border="success" className={index % 2 === 0 ? "back02 mb-3" : "mb-3"} key={"main" + index}>
                <Card.Body>
                  {item.subjectList.map((itemSub, indexSub) => (
                    <Row className="classRow" key={"sub" + indexSub}>
                      <Col>{indexSub === 0 ?
                        <Card.Title className="mt-1 pt-1">{item.id}.{item.name}</Card.Title> : null}  </Col>
                      <Col> <Card.Subtitle
                        className="mt-1 mb-1 text-muted pt-2">{itemSub.id}.{itemSub.name}</Card.Subtitle>
                      </Col>
                      <Col xs={6} className="pt-2">
                        {itemSub.subjectList.map((itemSub3, indexSub3) => (
                          <a href="" key={"itemSub3" + indexSub3} role="button" title={itemSub3.name}
                             className="card-link me-lg-3"
                             onClick={(e) => handleClass(e, itemSub3.folderId)}>{itemSub3.name}</a>
                        ))}
                        <a href="" role="button" title="單元評分" className="card-link me-lg-3"
                           onClick={(e) => handleValue(e, `${item.id}.${item.name}`, `${itemSub.id}.${itemSub.name}`, itemSub.folderId)}>單元評分</a>
                        <a href="" role="button" title="課程檢測" className="card-link me-lg-3"
                           onClick={(e) => handleTest(e, `${item.id}.${item.name}`, `${itemSub.id}.${itemSub.name}`, itemSub.folderId)}>課程檢測</a>
                      </Col>
                    </Row>
                  ))}
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </section>


    </main>
  )
}

export default ClassTable
