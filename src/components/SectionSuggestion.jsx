import Star from "./Star";
import Satisfy from "./Satisfy";
import React, {useState} from "react";

const SectionSuggestion = () => {
  const suggestItem = [
    {"id": "platform1", "name": "平台架構"},
    {"id": "platform2", "name": "版面設計"},
    {"id": "platform3", "name": "使用便利性"}
  ]
  const [textAreaUp, setTextAreaUp] = useState("");
  const [textAreaDown, setTextAreaDown] = useState("");
  const handleSelectChangeUp = (event) =>{
    console.log('event', event.target.value)
    console.log('name', event.target.name)
  }

  const handleSelectChangeDown = (event) =>{
    console.log('event', event.target.value)
    console.log('name', event.target.name)
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
            <div className="php-email-form">
              <div className="form-group mt-3">
                <label htmlFor="name" className="suggest">
                  <i className="bi bi-palette"></i>
                  <h4>架構版面評分</h4>
                </label>
                <Star lists={suggestItem} handleSelectChange={handleSelectChangeUp}/>

              </div>

              <div className="form-group mt-5">
                <label htmlFor="suggestion1" className="suggest"><i className="bi bi-paint-bucket"></i>
                  <h4>架構版面建議事項</h4></label>
                <textarea className="form-control" name="suggestion1" rows="3" id="suggestion1" required value={textAreaUp} onChange={e => setTextAreaUp(e.target.value)}></textarea>
              </div>
              <div className="form-group mt-5">
                <label htmlFor="suggestion2" className="suggest">
                  <i className="bi bi-receipt"></i>
                  <h4>其他建議事項</h4>
                </label>
                <textarea className="form-control" name="suggestion2" rows="3" id="suggestion2" required placeholder="請敘明主題、單元或項目等" value={textAreaDown} onChange={e => setTextAreaDown(e.target.value)}></textarea>
              </div>
              <Satisfy handleSelectChange={handleSelectChangeDown}/>

              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">送出評分</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SectionSuggestion
