import React, {useEffect, useState, useContext} from "react";
import {getFilmUrl, postSubjectSuggestion} from "../utils/api";
import {classListKey, suggestListKey, userLoginKey} from "../config";
import Alert from 'react-bootstrap/Alert';
import failedImg from '../assets/img/fail.png'
import {useNavigate} from "react-router-dom";
import GlobalState from "../context/MenuSelect";


const AboutClass = () => {
  const [nowSelect, setNowSelect] = useState({"folderUrl":""}) // 該頁內的選擇 課程內容 檢查重點 個案分享 參考資料
  const [itemList, setItemList] = useState([])
  const [starSelect, setStarSelect] = useState({"subjectID": "01", "subSubjectID": "A", "value": 5, "folderId":""})
  const [showAlert, setShowAlert] = useState({"show": false, "type": "success"})
  const [disableSend, setDisableSend] = useState(false)
  const navigate = useNavigate();
  const { selectItem } = useContext(GlobalState)

  useEffect(() => {
    let isUnmounted = false
    //todo: 要做error handle
    const filmArray = JSON.parse(sessionStorage.getItem(classListKey))
    const saveFolder = filmArray.find(item => item.id === selectItem.split(',')[0])
    const saveSubjectList = saveFolder.subjectList.find(item => item.id === selectItem.split(',')[2])
    console.log("saveFolder", saveFolder)
    console.log("saveSubjectList", saveSubjectList)

    setItemList(saveSubjectList.subjectList)
    if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
      navigate("/")
    }

    //get folderId to get film url
    getFilmUrl(saveSubjectList.subjectList[0].folderId).then(
      (res) => {
        if (res.code !== "200") {
          saveSubjectList.subjectList[0].folderUrl = ""
          setNowSelect(saveSubjectList.subjectList[0])
          return
        }
        saveSubjectList.subjectList[0].folderUrl = "http://www.itez.com.tw:7070" + res.url
        setNowSelect(saveSubjectList.subjectList[0])
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html

      },
      (e) => {
        console.log("get response failed!");
      })

    if (selectItem) {
      const myArray = selectItem.split(",");
      setStarSelect({"subjectID": myArray[0], "subSubjectID": myArray[2], "value": 5, "folderId":saveSubjectList.folderId})
    }

    //顯示評分訊息
    const getSuggestList = JSON.parse(sessionStorage.getItem(suggestListKey))
    if (getSuggestList != null) {
      const sendAgain = getSuggestList.filter((item) => item.subjectID === selectItem.split(',')[0] && item.subSubjectID === selectItem.split(',')[2])
      if (sendAgain.length > 0) {
        setShowAlert({"show": true, "type": "warning"})
        setDisableSend(true)
      } else {
        setShowAlert({"show": false, "type": "warning"})
        setDisableSend(false)
      }
    }
    return () => isUnmounted = true
  }, [selectItem]);
  const handleClass = (event, contentID) => {
    event.preventDefault();
    const newSelect = itemList.find((item) => item.id === contentID)
    getFilmUrl(newSelect.folderId).then(
      (res) => {
        if (res.code !== "200") {
          newSelect.folderUrl = ""
          setNowSelect(newSelect)
          return
        }
        newSelect.folderUrl = "http://www.itez.com.tw:7070" + res.url
        setNowSelect(newSelect)
        // http://www.itez.com.tw:7070/html5/d8d912e0-0a6f-4941-918f-661226cab4c1/index.html

      },
      (e) => {
        console.log("get response failed!");
      })
  }


  const handleSelectChange = event => {
    setStarSelect({
      "folderId": starSelect.folderId,
      "subjectID":  selectItem.split(',')[0],
      "subSubjectID":  selectItem.split(',')[2],
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
        setShowAlert({"show": true, "type": "warning"})
        setDisableSend(true)
        return
      }
    }

    const sendStarObj = {
      "folderId": starSelect.folderId,
      "value": starSelect.value
    }

    postSubjectSuggestion(sendStarObj).then(
      (res) => {
        // console.log("get article response:", res);
        const suggestList = [starSelect]
        if (getSuggestList === null) {
          getSuggestList = []
        }

        const newOBj = [...getSuggestList, ...suggestList]
        sessionStorage.setItem(suggestListKey, JSON.stringify(newOBj))
        setShowAlert({"show": true, "type": "success"})
        setDisableSend(true)
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
            <h2 aria-current="page">{ selectItem.split(',')[2]}.{ selectItem.split(',')[3]}</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li>{ selectItem.split(',')[0]}.{ selectItem.split(',')[1]}</li>
              <li>{ selectItem.split(',')[2]}.{ selectItem.split(',')[3]}</li>
              <li>{nowSelect.name}</li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-9">
              {nowSelect.folderUrl.length > 0 ? <iframe src={nowSelect.folderUrl} className="iframeSpecial"
                                                    title={nowSelect.name + "頁面播放"}></iframe> :
                <div className="section-title">
                  <img src={failedImg} style={{maxHeight: '100px'}} alt="課程檔案不存在，請直接與網站管理員連繫"/>
                  <p>課程檔案不存在，請直接與網站管理員連繫</p>
                </div>}

            </div>
            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>{ selectItem.split(',')[2]}.{ selectItem.split(',')[3]}</h3>
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
                  </Alert> : null}
                <form className="row gy-2 gx-7" onSubmit={handleSubmit}>
                  <div className="form-check col-2">
                    <label htmlFor="star5" className="font12em">五顆星
                      <input className="form-check-input" type="radio" name="star" id="star5"
                             value="5" onChange={handleSelectChange}  disabled={disableSend}
                             checked={starSelect["value"] && starSelect["value"] === "5"}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star4" className="font12em">四顆星
                      <input className="form-check-input" type="radio" name="star" id="star4"  disabled={disableSend}
                             value="4" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star3" className="font12em">三顆星
                      <input className="form-check-input" type="radio" name="star" id="star3"  disabled={disableSend}
                             value="3" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star2" className="font12em">二顆星
                      <input className="form-check-input" type="radio" name="star" id="star2"  disabled={disableSend}
                             value="2" onChange={handleSelectChange}/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-1">
                    <label htmlFor="star1" className="font12em">一顆星
                      <input className="form-check-input" type="radio" name="star" id="star1"  disabled={disableSend}
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
