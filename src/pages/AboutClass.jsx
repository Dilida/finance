import React, {useEffect, useState} from "react";
import {postSubject, postSubjectSuggestion} from "../utils/api";
import {postSubjectObj} from "../utils/requestMock";
import {classSelectKey, suggestListKey} from "../config";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AboutClass = () => {
  const [nowSelect, setNowSelect] = useState({}) // 該頁內的選擇 課程內容 檢查重點 個案分享 參考資料
  const [itemList, setItemList] = useState([])
  const [classSelect, setClassSelect] = useState(["01", "存款業務", "A", "存款業務及開戶審查"])  // menu bar 的選擇
  const [starSelect, setStarSelect] = useState({"subjectID": "01", "subSubjectID": "A", "value": 5})
  const [showAlert, setShowAlert] = useState({"show": false, "type": "success"})


  useEffect(() => {
    if (sessionStorage.getItem(classSelectKey)) {
      const myArray = sessionStorage.getItem(classSelectKey).split(",");
      setClassSelect(myArray)
      setStarSelect({"subjectID": myArray[0], "subSubjectID": myArray[2], "value": "5"})
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
      "value": parseInt(event.target.value),
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    // 先檢驗是否已送出評分過
    let getSuggestList = JSON.parse(sessionStorage.getItem(suggestListKey))
    if (getSuggestList != null) {
      const sendAgain = getSuggestList.filter((item) => item.subjectID === starSelect.subjectID && item.subSubjectID === starSelect.subSubjectID)
      if (sendAgain.length > 0) {
        setShowAlert({"show": true, "type": "danger"})
        return
      }
    }


    postSubjectSuggestion(starSelect).then(
      (res) => {
        // console.log("get article response:", res);
        const suggestList = [starSelect]
        if (getSuggestList === null) {
          getSuggestList = []
        }

        const newOBj = [...getSuggestList, ...suggestList]
        sessionStorage.setItem(suggestListKey, JSON.stringify(newOBj))
        setShowAlert({"show": true, "type": "success"})
        setTimeout(() => {
          setShowAlert({"show": false, "type": "success"})
        }, 1000 * 10);
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
                {showAlert.show ?
                  <Alert key="success" variant={showAlert.type}>
                    {showAlert.type === "success" ? "評分已成功送出，請勿重覆操作。" : "此課程已評分過，請勿重覆操作。"}
                    <Alert.Link href="/suggestion">點我看評分結果 </Alert.Link>
                    <Button onClick={() => setShowAlert({"show": false, "type": "success"})}
                            variant={`outline-${showAlert.type}`}>
                      關閉此提醒
                    </Button>
                  </Alert> : null}
                <form className="row gy-2 gx-7" onSubmit={handleSubmit}>
                  <div className="form-check col-2">
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
                  <div className="form-check col-1">
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
