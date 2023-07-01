
const SectionLogin = ({ title }) => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <p>請選擇使用身份</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-body"></i></div>
              <h4 className="title"><a href="">社會大眾</a></h4>
              <div className="btn-get-started">進入課程 Start</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bi-credit-card"></i></div>
              <h4 className="title"><a href="">金融機構</a></h4>
              <div className="btn-get-started">進入課程 Start</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-book-reader"></i></div>
              <h4 className="title"><a href="">學生</a></h4>
              <div className="btn-get-started">進入課程 Start</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">本會各局處</a></h4>
              <div className="btn-get-started">進入課程 Start</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SectionLogin
