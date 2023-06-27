import aboutImg from '../assets/img/about-img.svg';
import mapImg from '../assets/img/achievement.svg';

const Home = () => {
  return (
    <main id="main">
      <section id="about" className="about section-bg">
        <div className="container">

          <div className="row justify-content-between">
            <div className="col-lg-4 d-flex align-items-center justify-content-center about-img">
              <img src={aboutImg} className="img-fluid" alt="金檢學堂學習目的" data-aos="zoom-in" />
            </div>
            <div className="col-lg-7 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">金檢學堂</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                <b className="note">本系統假日不對外開放</b>
              </p>
              <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>建置目的</h4>
                  <p>本學習專區為向金融機構之稽核人員、對金融檢查有興趣者及金檢人官宣導金檢相關知識、建立金融檢查之基本觀念。
                    本局每年配合法規變動及檢查發現增修相關課程教育內容，並不定期新增課程單元，於年底前將增修課程內容公告上網，
                    期透過豐富、專業之課程說，引導瀏覽者輕鬆踏入金檢知識領域。</p>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>重要訊息</h4>
                  <p>
                    111 年 11 月份已於「金檢學堂」新增「保險業收費及佣金作業」主題，並於該主題項下建立 2 個課程單元【即新增「佣金作業」1 個單元，以及將「收費作業」單元自「保險招纜業務」主題移至此主題項下】。
                    另配合法規變動（本課程修正基準日為 2022 年 6 月 30 日）及檢查實務增修原有 14 個主題中之 30 個課程單元相關教材內容，歡迎指教。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>金檢課程學習地圖</h1>
              <h2>本園區提供15站探索之旅，請循序漸進體驗</h2>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={mapImg} className="img-fluid animated" alt="學習地圖" />
            </div>
          </div>
        </div>

      </section>

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

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>意見表</p>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>

    </main>

  )
}

export default Home
