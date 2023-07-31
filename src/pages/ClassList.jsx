import React, {useEffect, useState} from "react";
import {getClassList, getFilmUrl} from "../utils/api";
import {userLoginKey, selectClassTitle} from "../config";
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';


const ClassList = () => {
  const [itemList, setItemList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    let isUnmounted = false
    getClassList().then(
      (res) => {
        if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
          navigate("/")
        }

        let newList = []
        res.forEach((item) => {
          item.subjectList.forEach((item2) => {
            const newItem = {
              mainTitle: `${item.id}.${item.name}`,
              subTitle: `${item2.id}.${item2.name}`,
              folderId: item2.folderId,
              subjectList: item2.subjectList
            }
            console.log('newItem', newItem)
           newList.push(newItem)
          })
        })
        console.log("classList", newList)
        setItemList(newList)
      },
      (e) => {
        console.log("get response failed!");
      })

    return () => isUnmounted = true
  }, []);
  const handleClass = (event, folderId) => {
    event.preventDefault();
    getFilmUrl(folderId).then(
      (res) => {
        if (res.code !=+ "200"){
          return
        }
        const folderUrl = "http://www.itez.com.tw:7070" + res.url
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html
        window.open(folderUrl, '_blank', 'noopener,noreferrer');

      },
      (e) => {
        console.log("get response failed!");
      })
  }

  const handleTest = (event, item) => {
    event.preventDefault();
    sessionStorage.setItem(selectClassTitle, item.mainTitle +" "+ item.subTitle)
    navigate("/classTest?folderId="+item.folderId)
  }

  const handleValue = (event, folderId) => {
    event.preventDefault();
    navigate("/classTest"+folderId)
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
            {itemList.map((item, index) => (
              <div className="col-lg-3 portfolio-info" key={item.folderId}>
                <Card border="success" style={{maxWidth: '16rem'}}>
                  <Card.Header className={"back"+item.mainTitle.split('.')[0]}>{item.mainTitle}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.subTitle}</Card.Title>
                    <Card.Text>
                      <ul>
                        {item.subjectList.map((item, index) => (
                          <li key={item.id} className="portfolio-description">
                            <a href="" role="button" title={item.name}  onClick={(e) => handleClass(e, item.folderId)}>{item.name}</a>
                          </li>
                        ))}
                        <li><a href="" role="button" title="評分單元"  onClick={(e) => handleClass(e, item.folderId)}>評分單元</a></li>
                        <li><a href="" role="button" title="課程檢測"  onClick={(e) => handleTest(e, item)}>課程檢測</a></li>
                      </ul>
                    </Card.Text>
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

export default ClassList
