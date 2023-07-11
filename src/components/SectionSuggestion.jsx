import Star from "./Star";
import Satisfy from "./Satisfy";
import React, {useState} from "react";
import {postSuggestion} from "../utils/api";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {suggestTotalKey} from "../config";


const SectionSuggestion = () => {
  const suggestItem = [
    {"id": "platform1", "name": "平台架構"},
    {"id": "platform2", "name": "版面設計"},
    {"id": "platform3", "name": "使用便利性"}
  ]

  const [showAlert, setShowAlert] = useState({"show": false, "type": "success"})
  const [textAreaUp, setTextAreaUp] = useState("");
  const [textAreaDown, setTextAreaDown] = useState("");
  const [sendObj, setSendObj] = useState({
    "platform1": "",
    "platform2": "",
    "platform3": '',
    "platform4": '',
    "suggestion1": '',
    "suggestion2": '',
  })
  const handleSelectChange = (event) => {
    sendObj[event.target.name] = event.target.value
    setSendObj(sendObj)
  }

  const handleSubmit = event => {
    event.preventDefault();

    let getSuggestList = JSON.parse(sessionStorage.getItem(suggestTotalKey))
    if (getSuggestList != null) {
      setShowAlert({"show": true, "type": "danger"})
      return
    }

    sendObj.suggestion1 = textAreaUp
    sendObj.suggestion2 = textAreaDown
    console.log('mmmmm', sendObj)
    postSuggestion(sendObj).then(
      (res) => {
        sessionStorage.setItem(suggestTotalKey, "1")
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
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>意見表</p>
          <h2>教材單元評價，請進入「課程區」閱覽教材內容後給予價</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="name" className="suggest">
                  <i className="bi bi-palette"></i>
                  <h4>架構版面評分</h4>
                </label>
                <Star lists={suggestItem} handleSelectChange={handleSelectChange}/>

              </div>

              <div className="form-group mt-5">
                <label htmlFor="suggestion1" className="suggest"><i className="bi bi-paint-bucket"></i>
                  <h4>架構版面建議事項</h4></label>
                <textarea className="form-control" name="suggestion1" rows="3" id="suggestion1" required
                          value={textAreaUp} onChange={e => setTextAreaUp(e.target.value)}></textarea>
              </div>
              <div className="form-group mt-5">
                <label htmlFor="suggestion2" className="suggest">
                  <i className="bi bi-receipt"></i>
                  <h4>其他建議事項</h4>
                </label>
                <textarea className="form-control" name="suggestion2" rows="3" id="suggestion2" required
                          placeholder="請敘明主題、單元或項目等" value={textAreaDown}
                          onChange={e => setTextAreaDown(e.target.value)}></textarea>
              </div>
              <Satisfy handleSelectChange={handleSelectChange}/>

              {showAlert.show ?
                <Alert key="success" variant={showAlert.type} className="text-center">
                  {showAlert.type === "success" ? "意見表已成功送出，請勿重覆操作。" : "意見表已填寫過，請勿重覆操作。"}
                  <Alert.Link href="/suggestion">點我看課程評分表 </Alert.Link>
                  <Button onClick={() => setShowAlert({"show": false, "type": "success"})}
                          variant={`outline-${showAlert.type}`}>
                    關閉此提醒
                  </Button>
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
