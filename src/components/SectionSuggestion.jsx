import Star from "./Star";
import Satisfy from "./Satisfy";
import React, {useEffect, useState} from "react";
import { postSuggestion} from "../utils/api";
import Alert from "react-bootstrap/Alert";
import {suggestTotalKey} from "../config";


const SectionSuggestion = () => {
  const suggestItem = [
    {"id": "platform", "name": "平台架構"},
    {"id": "layout", "name": "版面設計"},
    {"id": "usability", "name": "使用便利性"}
  ]

  const [disableSend, setDisableSend] = useState(false)
  const [showAlert, setShowAlert] = useState({"show": false, "type": "success"})
  const [textAreaUp, setTextAreaUp] = useState("");
  const [textAreaDown, setTextAreaDown] = useState("");
  const [sendObj, setSendObj] = useState({
    "platform": "",
    "layout": "",
    "usability": '',
    "overall": '',
    "suggestLayout": '',
    "suggestElse": '',
  })

  useEffect(() => {
    let getSuggestList = JSON.parse(sessionStorage.getItem(suggestTotalKey))
    if (getSuggestList != null) {
      setShowAlert({"show": true, "type": "danger"})
      setDisableSend(true)
    }

  }, []);
  const handleSelectChange = (event) => {
    sendObj[event.target.name] = parseInt(event.target.value)
    setSendObj(sendObj)
  }

  const handleSubmit = event => {
    event.preventDefault();

    let getSuggestList = JSON.parse(sessionStorage.getItem(suggestTotalKey))
    if (getSuggestList != null) {
      setShowAlert({"show": true, "type": "danger"})
      setDisableSend(true)
      return
    }

    sendObj.suggestLayout = textAreaUp
    sendObj.suggestElse = textAreaDown
    postSuggestion(sendObj).then(
      (res) => {
        sessionStorage.setItem(suggestTotalKey, "1")
        setShowAlert({"show": true, "type": "success"})
        setDisableSend(true)

      },
      (e) => {
        console.log("get response failed!");
      })
  }

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>意見表</h2>
          <p>教材單元評價，請進入「課程區」閱覽教材內容後給予評價</p>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="架構版面評分-必填" className="suggest">
                  <i className="bi bi-palette" title="架構版面評分"></i>
                  <h3>架構版面評分</h3>
                </label>
                <Star lists={suggestItem} handleSelectChange={handleSelectChange} disableSend={disableSend}/>

              </div>

              <div className="form-group mt-5">
                <label htmlFor="suggestion1" className="suggest"><i className="bi bi-paint-bucket" title="架構版面建議事項"></i>
                  <h3>架構版面建議事項</h3></label>
                <textarea className="form-control" name="suggestion1" rows="3" id="suggestion1" required disabled={disableSend}
                          value={textAreaUp} onChange={e => setTextAreaUp(e.target.value)}></textarea>
              </div>
              <div className="form-group mt-5">
                <label htmlFor="suggestion2" className="suggest">
                  <i className="bi bi-receipt" title="其他建議事項"></i>
                  <h3>其他建議事項</h3>
                </label>
                <textarea className="form-control" name="suggestion2" rows="3" id="suggestion2" required disabled={disableSend}
                          placeholder="請敘明主題、單元或項目等" value={textAreaDown}
                          onChange={e => setTextAreaDown(e.target.value)}></textarea>
              </div>
              <Satisfy handleSelectChange={handleSelectChange} disableSend={disableSend}/>

              {showAlert.show ?
                <Alert key="success" variant={showAlert.type} className="text-center">
                  {showAlert.type === "success" ? "意見表已成功送出，請勿重覆操作。" : "意見表已填寫過，請勿重覆操作。"}
                  <Alert.Link href="/suggestion">點我看課程評分表 </Alert.Link>

                </Alert> : null}

              <div className="text-center">
                <button type="submit">送出評分</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SectionSuggestion
