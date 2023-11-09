import React, {useEffect, useState} from "react";
import {getClassList, getFilmUrl} from "../utils/api";
import {userLoginKey, selectClassTitle, classListKey} from "../config";
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import Meta from "../components/Meta";


const ClassList = () => {
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
          let newList = []
          res.forEach((item) => {
            item.subjectList.forEach((item2) => {
              const newItem = {
                mainTitle: `${item.id}.${item.name}`,
                subTitle: `${item2.id}.${item2.name}`,
                folderId: item2.folderId,
                subjectList: item2.subjectList
              }
              newList.push(newItem)
            })
          })
          setItemList(newList)
          setLoading(false)
          sessionStorage.setItem(classListKey, JSON.stringify(res))
        },
        (e) => {
          console.log("get response failed!");
        })
    } else {
      setLoading(false)
      const classRes = JSON.parse(classList)
      let newList = []
      classRes.forEach((item) => {
        item.subjectList.forEach((item2) => {
          const newItem = {
            mainTitle: `${item.id}.${item.name}`,
            subTitle: `${item2.id}.${item2.name}`,
            folderId: item2.folderId,
            subjectList: item2.subjectList
          }
          newList.push(newItem)
        })
      })
      setItemList(newList)
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

  const handleTest = (event, item) => {
    event.preventDefault();
    sessionStorage.setItem(selectClassTitle, item.mainTitle + " " + item.subTitle)
    navigate("/classTest?folderId=" + item.folderId)
  }

  const handleValue = (event, item) => {
    event.preventDefault();
    sessionStorage.setItem(selectClassTitle, item.mainTitle + " " + item.subTitle)
    navigate("/classValue?folderId=" + item.folderId)
  }

  return (
    <main id="main">
      <Meta title="課程列表" />
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">課程列表</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li><a href="/classTable">長條排列</a></li>
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
            <div className="row gy-4">
              {itemList.map((item, index) => (
                <div className="col-lg-3 portfolio-info" key={item.folderId}>
                  <Card border="success" style={{maxWidth: '16rem'}}>
                    <Card.Header className={"back" + item.mainTitle.split('.')[0]}>{item.mainTitle}</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.subTitle}</Card.Title>

                      <ul>
                        {item.subjectList.map((item, index) => (
                          <li key={item.id} className="portfolio-description">
                            <a href="" role="button" title={item.name}
                               onClick={(e) => handleClass(e, item.folderId)}>{item.name}</a>
                          </li>
                        ))}
                        <li><a href="" role="button" title="單元評分" onClick={(e) => handleValue(e, item)}>單元評分</a>
                        </li>
                        <li><a href="" role="button" title="課程檢測" onClick={(e) => handleTest(e, item)}>課程檢測</a>
                        </li>
                      </ul>

                    </Card.Body>
                  </Card>
                </div>
              ))}


            </div>
          }
        </div>
      </section>


    </main>
  )
}

export default ClassList
