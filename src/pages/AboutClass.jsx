import React, {useEffect, useState} from "react";
import {postSubject, postSubjectSuggestion} from "../utils/api";
import {postSubjectObj} from "../utils/requestMock";
import {classSelectKey} from "../config";
import {useNavigate} from "react-router-dom";

const AboutClass = () => {
  const [nowSelect, setNowSelect] = useState({}) // 該頁內的選擇 課程內容 檢查重點 個案分享 參考資料
  const [itemList, setItemList] = useState([])
  const [classSelect, setClassSelect] = useState(["01", "存款業務", "A", "存款業務及開戶審查"])  // menu bar 的選擇
  const [starSelect, setStarSelect] = useState({"subjectID": "01", "subSubjectID": "A", "value": "5"})
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(classSelectKey)) {
      const myArray = sessionStorage.getItem(classSelectKey).split(",");
      setClassSelect(myArray)
    }

    //todo 要換送進去的id
    postSubject(postSubjectObj).then(
      (res) => {
        // console.log("get article response:", res);
        setNowSelect(res[0])
        setItemList(res)
      },
      (e) => {
        console.log("get response failed!");
      })

  }, []);
  const handleClass = (contentID) => {
    const newSelect = itemList.filter((item) => item.contentID === contentID)
    setNowSelect(newSelect[0])
  }

  const handleSelectChange = event => {
    setStarSelect({
      "subjectID": classSelect[0],
      "subSubjectID": classSelect[2],
      "value": event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("show", starSelect)
    postSubjectSuggestion(starSelect).then(
      (res) => {
        // console.log("get article response:", res);
        navigate('/suggestion')
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
            <h2>課程內容</h2>
            <ol>
              <li>{classSelect[0]}.{classSelect[1]}</li>
              <li>{classSelect[2]}.{classSelect[3]}</li>
              <li>{nowSelect.contentName}</li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-10">
              <iframe src={nowSelect.contentFilm} className="iframeSpecial" title="iframeSpecial"></iframe>
            </div>
            <div className="col-lg-2">
              <div className="portfolio-info">
                <h3>{classSelect[2]}.{classSelect[3]}</h3>
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
              <div className="col-lg-8">
                <h4>單元評價</h4>
                {/*單元評價 radio button*/}
                {/*看評價結果*/}
                <form className="row gy-2 gx-7" onSubmit={handleSubmit}>
                  <div className="form-check col-auto">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                           value="5" onChange={handleSelectChange}
                           checked={starSelect["value"] && starSelect["value"] === "5"}/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                           value="4" onChange={handleSelectChange}/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                           value="3" onChange={handleSelectChange}/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                           value="2" onChange={handleSelectChange}/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-auto">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                           value="1" onChange={handleSelectChange}/>
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
