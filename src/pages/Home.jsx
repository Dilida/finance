import aboutImg from '../assets/img/about-img.png';
import map1 from '../assets/img/c1.png';
import map2 from '../assets/img/c2.png';
import map3 from '../assets/img/c3.png';

import SectionSuggestion from "../components/SectionSuggestion";
import SectionLogin from "../components/SectionLogin";

const Home = () => {

  return (
    <main id="main">
      <section id="about" className="about section-bg">
        <div className="container">

          <div className="row justify-content-between">
            <div className="col-lg-4 d-flex align-items-center justify-content-center about-img">
              <img src={aboutImg} className="img-fluid" alt="金檢學堂學習目的" data-aos="zoom-in"/>
            </div>
            <div className="col-lg-7 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">金檢學堂</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                <b className="note">本系統假日不對外開放</b>
              </p>
              <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-cube-alt"></i>
                  <h4>建置目的</h4>
                  <p>本學習專區為向金融機構之稽核人員、對金融檢查有興趣者及金檢人官宣導金檢相關知識、建立金融檢查之基本觀念。
                    本局每年配合法規變動及檢查發現增修相關課程教育內容，並不定期新增課程單元，於年底前將增修課程內容公告上網，
                    期透過豐富、專業之課程說，引導瀏覽者輕鬆踏入金檢知識領域。</p>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">

                  <i className="bx bx-receipt"></i>
                  <h4>重要訊息</h4>
                  <p>
                    111 年 11 月份已於「金檢學堂」新增「保險業收費及佣金作業」主題，並於該主題項下建立 2 個課程單元【即新增「佣金作業」1
                    個單元，以及將「收費作業」單元自「保險招纜業務」主題移至此主題項下】。
                    另配合法規變動（本課程修正基準日為 2022 年 6 月 30 日）及檢查實務增修原有 14 個主題中之 30
                    個課程單元相關教材內容，歡迎指教。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="section-title">
            <p>金檢課程學習地圖</p>
            <h2>本園區提供15站探索之旅，請循序漸進體驗</h2>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 order-1 order-lg-2 hero-img">
              <img src={map1} className="img-fluid animated" alt="學習地圖"/>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img">
              <img src={map2} className="img-fluid animated" alt="學習地圖"/>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img">
              <img src={map3} className="img-fluid animated" alt="學習地圖"/>
            </div>
          </div>
        </div>

      </section>

      <SectionLogin/>
      <SectionSuggestion/>

    </main>

  )
}

export default Home
