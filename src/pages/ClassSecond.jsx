import React, {useEffect, useState} from "react";
import {getClassList} from "../utils/api";
import {userLoginKey, classListKey} from "../config";
import {useNavigate} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {Col, Row, Card} from "react-bootstrap";
import pic1 from '../assets/img/test01.png'
import {getQueryString} from "../utils/utils";


const ClassSecond = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState([])

  useEffect(() => {
    let isUnmounted = false
    if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
      navigate("/")
    }
    const id = getQueryString("id")
    const classList = JSON.parse(sessionStorage.getItem(classListKey))
    const selectItem = classList.find(item=>item.id === id)
    console.log('selectItem', selectItem)
    setContent(selectItem)

    return () => isUnmounted = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">{content.id}.{content.name}</h2>
          </div>
        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="class-second" className="class-second">
        <div className="container">
          <div className="row gy-4">
            <div className="px-3 col-lg-6" key={"class-second"}>
              <Card border="success">
                <Card.Header className="">A.存款</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>課程內容</Col>
                    <Col>檢查重點</Col>
                    <Col>個案分享</Col>
                    <Col>參考資料</Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Col xs={3}>單元評分</Col>
                    <Col xs={3}>課程檢測</Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default ClassSecond
