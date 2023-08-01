import React, {useEffect, useState} from "react";
import { postSubjectSuggestion} from "../utils/api";
import { selectClassTitle, suggestListKey, userLoginKey} from "../config";
import Alert from 'react-bootstrap/Alert';
import {useLocation, useNavigate} from "react-router-dom";

const ClassValue = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bigTitle = sessionStorage.getItem(selectClassTitle)
  const folderId = new URLSearchParams(location.search).get('folderId')
  const [showAlert, setShowAlert] = useState({"show": false, "type": "success"})
  const [starSelect, setStarSelect] = useState({"value": 5, "folderId":folderId})
  const [disableSend, setDisableSend] = useState(false)

  useEffect(() => {
    let isUnmounted = false
    //顯示評分訊息
    const getSuggestList = JSON.parse(sessionStorage.getItem(suggestListKey))
    if (getSuggestList != null) {
      const sendAgain = getSuggestList.filter((item) => item.folderId === starSelect.folderId)
      if (sendAgain.length > 0) {
        setShowAlert({"show": true, "type": "warning"})
        setDisableSend(true)
      } else {
        setShowAlert({"show": false, "type": "warning"})
        setDisableSend(false)
      }
    }
    if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
      navigate("/")
    }
    return () => isUnmounted = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSelectChange = event => {
    setStarSelect({
      "folderId":folderId,
      "value": parseInt(event.target.value)
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    // 先檢驗是否已送出評分過
    let getSuggestList = JSON.parse(sessionStorage.getItem(suggestListKey))
    if (getSuggestList != null) {
      const sendAgain = getSuggestList.filter((item) => item.folderId === starSelect.folderId)
      if (sendAgain.length > 0) {
        setShowAlert({"show": true, "type": "warning"})
        setDisableSend(true)
        return
      }
    }

    postSubjectSuggestion(starSelect).then(
      (res) => {
        console.log("get article response:", res);
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
            <h2 aria-current="page">{bigTitle}</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li><a href="/classTable">回課程列表頁</a></li>
            </ol>
          </div>

        </div>
      </section>

      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
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
                      <input className="form-check-input" type="radio" name="star" id="star5" onChange={handleSelectChange}
                             value="5" disabled={disableSend} required/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star4" className="font12em">四顆星
                      <input className="form-check-input" type="radio" name="star" id="star4"  disabled={disableSend} onChange={handleSelectChange}
                             value="4"/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star3" className="font12em">三顆星
                      <input className="form-check-input" type="radio" name="star" id="star3"  disabled={disableSend} onChange={handleSelectChange}
                             value="3" /></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <label htmlFor="star2" className="font12em">二顆星
                      <input className="form-check-input" type="radio" name="star" id="star2"  disabled={disableSend} onChange={handleSelectChange}
                             value="2"/></label>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-1">
                    <label htmlFor="star1" className="font12em">一顆星
                      <input className="form-check-input" type="radio" name="star" id="star1"  disabled={disableSend} onChange={handleSelectChange}
                             value="1"/></label>
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

export default ClassValue
