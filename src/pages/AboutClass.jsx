import Spinner from 'react-bootstrap/Spinner';
import React, {useEffect, useState} from "react";
import {postSubject} from "../utils/api";
import {postSubjectObj} from "../utils/requestMock";
import {getQueryString} from "../utils/utils";

const AboutClass = () => {
  const [subjectList, setSubjectList] = useState([])
  const [nowTitle, setNowTitle] = useState({"itemID": 1, "itemTitle": "課程內容"})
  const [itemList, setItemList] = useState([
    {"itemID": 1, "itemTitle": "課程內容"},
    {"itemID": 2, "itemTitle": "檢查重點"},
    {"itemID": 3, "itemTitle": "個案分享"},
    {"itemID": 4, "itemTitle": "參考資料"}])

  useEffect(() => {
    const first = getQueryString("title")
    const second = getQueryString("sub")
    console.log(first, second)
    postSubject(postSubjectObj).then(
      (res) => {
        console.log("get article response:", res);
        setSubjectList(res)
        const showSubTitle = res.filter(item => item.content === 1)[0].contentScript
        const newItemList = itemList.map((item) => {
          if (item.itemID === 1) {
            item.itemSubList = showSubTitle
          }
          return item
        })
        setItemList(newItemList)
      },
      (e) => {
        console.log("get response failed!");
      }
    );
  }, []);

  return (
    <main id="main">

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>課程內容</h2>
            <ol>
              <li>01.存款業務</li>
              <li>A.存款業務及開戶審查</li>
              <li>{nowTitle.itemTitle}</li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="text-center">
          <Spinner animation="border" variant="success"/>
        </div>
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">

                  {/*iframe 插入奇妙的頁面*/}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>A.存款業務及開戶審查</h3>
                <ul>
                  {itemList.map((item) => (
                    <li key={item.itemID} className="portfolio-description">
                      <strong>{item.itemTitle}</strong>
                      {item.itemSubList && item.itemSubList.map((minItem) => (
                        <p>{minItem}</p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="grade">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h4>單元評價</h4>
                {/*單元評價 radio button*/}
                {/*看評價結果*/}
                <form className="row gy-2 gx-6">
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-auto">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="col-2">
                    <input type="submit" value="送出意見"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default AboutClass
