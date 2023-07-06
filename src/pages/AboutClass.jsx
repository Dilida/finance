import Spinner from 'react-bootstrap/Spinner';
import React, {useContext, useEffect, useState} from "react";
import {ClassContext} from "../context/ClassLists";
import { postSubject} from "../utils/api";
import {postSubjectObj} from "../utils/requestMock";

const AboutClass = () => {
  const {saveItem} = useContext(ClassContext)
  const [nowSelect, setNowSelect] = useState({})
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    //todo 要換送進去的id
    postSubject(postSubjectObj).then(
      (res) => {
        console.log("get article response:", res);
        setNowSelect(res[0])
        setItemList(res)
      },
      (e) => {
        console.log("get response failed!");
      })

  }, [saveItem]);
  const handleClass = (contentID) => {
    const newSelect = itemList.filter((item) => item.contentID === contentID)
    setNowSelect(newSelect[0])
  }

  return (
    <main id="main">

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>課程內容</h2>
            <ol>
              <li>{saveItem[0]}.{saveItem[1]}</li>
              <li>{saveItem[2]}.{saveItem[3]}</li>
              <li>{nowSelect.contentName}</li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        {/*<div className="text-center">*/}
        {/*  <Spinner animation="border" variant="success"/>*/}
        {/*</div>*/}
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-10">
              <iframe src={nowSelect.contentFilm} className="iframeSpecial"></iframe>
            </div>
            <div className="col-lg-2">
              <div className="portfolio-info">
                <h3>{saveItem[2]}.{saveItem[3]}</h3>
                <ul>
                  {itemList.map((item) => (
                    <li key={item.contentID} className="portfolio-description">
                      <strong onClick={() => handleClass(item.contentID)}
                              className={nowSelect.contentID === item.contentID ? "active" : ""}>{item.contentName}</strong>
                      {item.contentScript && item.contentScript.map((minItem) => (
                        <p key={item.itemID + minItem}>{minItem}</p>
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
