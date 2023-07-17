import React, {useEffect, useState} from "react";
import {getClassList, getFilmUrl, postSubjectSuggestion} from "../utils/api";
import {classSelectKey, selectClassFilm, suggestListKey} from "../config";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AboutClass = () => {
  const [nowSelect, setNowSelect] = useState({}) // 該頁內的選擇 課程內容 檢查重點 個案分享 參考資料
  const [itemList, setItemList] = useState([])
  const [classSelect, setClassSelect] = useState(["01", "存款業務", "A", "存款業務及開戶審查"])  // menu bar 的選擇
  const [starSelect, setStarSelect] = useState({"subjectID": "01", "subSubjectID": "A", "value": 5})
  const [showAlert, setShowAlert] = useState({"show": false, "type": "success"})


  useEffect(() => {
    //todo: 要做error handle
    const filmArray = JSON.parse(sessionStorage.getItem(selectClassFilm))
    setItemList(filmArray)

    //post folderId to get film url
    getFilmUrl(filmArray[0].folderId).then(
      (res) => {
        console.log('res1', res)
        filmArray[0].folderUrl = "http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html"
        setNowSelect(filmArray[0])
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html

      },
      (e) => {
        console.log("get response failed!");
      })

    if (sessionStorage.getItem(classSelectKey)) {
      const myArray = sessionStorage.getItem(classSelectKey).split(",");
      setClassSelect(myArray)
      setStarSelect({"subjectID": myArray[0], "subSubjectID": myArray[2], "value": "5"})
    }

  }, []);
  const handleClass = (event, contentID) => {
    event.preventDefault();
    const newSelect = itemList.find((item) => item.id === contentID)
    getFilmUrl(newSelect.folderId).then(
      (res) => {
        console.log('res1', res)
        newSelect.folderUrl = "http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html"
        setNowSelect(newSelect)
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html

      },
      (e) => {
        console.log("get response failed!");
      })
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
            <h2 aria-current="page">{classSelect[2]}.{classSelect[3]}</h2>
            <ol>
              <li>{classSelect[0]}.{classSelect[1]}</li>
              <li>{classSelect[2]}.{classSelect[3]}</li>
              <li>{nowSelect.name}</li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-9">
              <iframe src={nowSelect.folderUrl} className="iframeSpecial"
                      title={nowSelect.name + "頁面播放"}></iframe>
            </div>
            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>{classSelect[2]}.{classSelect[3]}</h3>
                <ul>
                  {itemList.map((item, index) => (
                    <li key={item.id} className="portfolio-description">
                      <a href=""><strong role="button" title={item.name}
                                         onClick={(e) => handleClass(e, item.id)}>{item.name}</strong></a>
                      {/*{item.contentScript && item.contentScript.map((minItem) => (*/}
                      {/*  <p key={item.itemID + minItem}>{minItem}</p>*/}
                      {/*))}*/}
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
              <div className="col-lg-12">
                <h4>單元評價</h4>
                {showAlert.show ?
                  <Alert key="success" variant={showAlert.type}>
                    {showAlert.type === "success" ? "評分已成功送出，請勿重覆操作。" : "此課程已評分過，請勿重覆操作。"}
                    <Alert.Link href="/suggestion" title="點我看評分結果">點我看評分結果 </Alert.Link>
                    <Button title="關閉此提醒" onClick={() => setShowAlert({"show": false, "type": "success"})}
                            variant={`outline-${showAlert.type}`}>
                      關閉此提醒
                    </Button>
                  </Alert> : null}
                <form className="row gy-2 gx-7" onSubmit={handleSubmit}>
                  <div className="form-check col-2">
                    <label htmlFor="star5" className="font12em">五顆星
                      <input className="form-check-input" type="radio" name="star" id="star5"
                             value="5" onChange={handleSelectChange}
                             checked={starSelect["value"] && starSelect["value"] === "5"}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star4" className="font12em">四顆星
                      <input className="form-check-input" type="radio" name="star" id="star4"
                             value="4" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star3" className="font12em">三顆星
                      <input className="form-check-input" type="radio" name="star" id="star3"
                             value="3" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star2" className="font12em">二顆星
                      <input className="form-check-input" type="radio" name="star" id="star2"
                             value="2" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-1">
                    <label htmlFor="star1" className="font12em">一顆星
                      <input className="form-check-input" type="radio" name="star" id="star1"
                             value="1" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="col-2">
                    <input type="submit" value="送出意見" aria-label="送出意見課程評分"/>
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
