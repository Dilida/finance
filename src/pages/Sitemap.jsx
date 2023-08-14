import React, {useEffect} from "react";

const Sitemap = () => {

  useEffect(() => {

  }, []);

  const scrollHandle = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "/#" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({behavior: "smooth", block: "start"}) //scrolling the page
  }
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">網站導覽</h2>
          </div>

        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊<br/>
          1. 上方功能區塊、2.中間功能區塊、 3.下方功能區間<br/><br/>

          本網站的快速鍵﹝Accesskey﹞設定如下：<br/><br/>
          Windows : Alt+U :上方選單連結區，此區塊列有本網站的主要選單。<br/>
          Windows : Alt+C :中間功能連結區，此區塊列有本網站的主要內容。<br/>
          Windows : Alt+Z :下方連絡區，此區塊列有資訊安全政策、隱私權政策等連結。<br/><br/>
          Windows + Firefox 瀏覽器 : Shift + Alt + U : 上方選單連結區，此區塊列有本網站的主要選單。<br/>
          Windows + Firefox 瀏覽器 : Shift + Alt + C : 中間功能連結區，此區塊列有本網站的主要內容。<br/>
          Windows + Firefox 瀏覽器 : Shift + Alt + Z : 下方連絡區，此區塊列有資訊安全政策、隱私權政策等連結。<br/><br/>
          Mac : Ctrl + Option + U :上方選單連結區，此區塊列有本網站的主要選單。<br/>
          Mac : Ctrl + Option + C :中間功能連結區，此區塊列有本網站的主要內容。<br/>
          Mac : Ctrl + Option + Z :下方連絡區，此區塊列有資訊安全政策、隱私權政策等連結。<br/><br/>
          <b className="note">課程區請先回首頁登入身分後開啟連結</b>
        </div>
      </section>
      <section id="sitemap">
        <div className="footer-top">
          <div className="container">
            <div className="col-lg-12 col-md-6 footer-links">
              <h3>課程區</h3>
              <ul>
                <li><a className="nav-link scrollto" onClick={scrollHandle} id="about-" title="回首頁"
                       href="">回首頁</a></li>
                <li><a className="nav-link scrollto" id="about-" title="課程列表"
                       href="/classFirst">課程列表</a></li>
                <li><a className="nav-link scrollto" onClick={scrollHandle} id="hero-" title="學習地圖"
                       href="">學習地圖</a></li>
                <li><a className="nav-link scrollto" onClick={scrollHandle} id="contact-" title="意見區"
                       href="">意見區</a></li>
                <li><a className="nav-link scrollto" href="/suggestion" title="評價結果">評價結果</a></li>
              </ul>
            </div>
            </div>
          </div>
      </section>


    </main>
)
}

export default Sitemap
