import aboutImg from '../assets/img/about-img.svg';

const Home = () => {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">

          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img src={aboutImg} className="img-fluid" alt="金檢學堂學習目的" data-aos="zoom-in" />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">金檢學堂</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                本系統假日不對外開放
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
    </main>

  )
}

export default Home
