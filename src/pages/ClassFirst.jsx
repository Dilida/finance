import React, {useEffect, useState} from "react";
import {getClassList} from "../utils/api";
import {userLoginKey, classListKey} from "../config";
import {useNavigate} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {Col, Row, Card} from "react-bootstrap";
import axios from "axios";
import ready from '../assets/img/ready.png'


const ClassFirst = () => {
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

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">課程列表</h2>
          </div>
        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="class-first" className="class-first">
        <div className="container">
          {loading ?
            <div className="text-center"><Spinner animation="border" variant="success"/></div>
            :
            <div className="row gy-4">
              {itemList.map((item, index) => (
                <div className="px-3 col-lg-6" key={"class-first" + item.id}>
                  <a href={"/classSecond?id=" + item.id} title={item.id + "." + item.name} role="button">
                    <Card border="success">
                      <Card.Body>
                        <Row>
                          <Col sm={4} className="mh-100"><img
                            src={item.uriLogo.length > 0 ? axios.defaults.url + item.uriLogo : ready}
                            alt={item.id + "." + item.name}/></Col>
                          <Col sm={8} className="mh-100">
                            <p className="text-start">{item.id}.{item.name}</p>
                            <p
                              className="text-start">{item.desc}</p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card></a>
                </div>
              ))}
            </div>}

        </div>
      </section>


    </main>
  )
}

export default ClassFirst
