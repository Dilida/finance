import React, {useEffect, useState, useContext} from "react";
import {getClassList, getFilmUrl} from "../utils/api";
import {userLoginKey} from "../config";
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import * as subjectList from "react-bootstrap/ElementChildren";


const AboutClass = () => {
  const [itemList, setItemList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    let isUnmounted = false
    getClassList().then(
      (res) => {
        if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
          navigate("/")
        }
        const classList = res.map((item) => {
          const secondList = item.subjectList.map((item2) => ({
            mainTitle: `${item.id}.${item.name}`,
            subTitle: `${item2.id}.${item2.name}`,
            folderId: item2.folderId,
            subjectList: item2.subjectList
          }))
          return secondList
        })
        console.log("classList", classList)
        setItemList(classList)
      },
      (e) => {
        console.log("get response failed!");
      })

    return () => isUnmounted = true
  }, []);
  const handleClass = (event, contentID) => {
    event.preventDefault();
    const newSelect = itemList.find((item) => item.id === contentID)
    getFilmUrl(newSelect.folderId).then(
      (res) => {
        if (res.code !== "200") {
          newSelect.folderUrl = ""
          return
        }
        newSelect.folderUrl = "http://www.itez.com.tw:7070" + res.url
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html

      },
      (e) => {
        console.log("get response failed!");
      })
  }


  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">課程列表</h2>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            {/*{itemList.map((item, index) => (*/}
            {/*  <div className="col-lg-3 portfolio-info" key={item.folderId}>*/}
            {/*    <Card border="success" style={{maxWidth: '16rem'}}>*/}
            {/*      <Card.Header>{item.id}.{item.name}</Card.Header>*/}
            {/*      <Card.Body>*/}
            {/*        <Card.Title>A.存款業務及開戶審查</Card.Title>*/}
            {/*        <Card.Text>*/}
            {/*          <ul>*/}
            {/*            {itemList.map((item, index) => (*/}
            {/*              <li key={item.id} className="portfolio-description">*/}
            {/*                <a href=""><strong role="button" title={item.name}*/}
            {/*                                   onClick={(e) => handleClass(e, item.id)}>{item.name}</strong></a>*/}

            {/*              </li>*/}
            {/*            ))}*/}
            {/*            <li>評分此單元</li>*/}
            {/*          </ul>*/}
            {/*        </Card.Text>*/}
            {/*      </Card.Body>*/}
            {/*    </Card>*/}
            {/*  </div>*/}
            {/*))}*/}


          </div>
        </div>
      </section>


    </main>
  )
}

export default AboutClass
