import React from "react";
import {getSubjectList} from "../utils/api";
import {classSelectKey, userLoginKey} from "../config";
import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const Sitemap = () => {
  const [subjectList, setSubjectList] = useState([])
  const [userLogin, setUserLogin] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(userLoginKey)) {
      setUserLogin(true)
    }

    getSubjectList().then(
      (res) => {
        setSubjectList(res)
      },
      (e) => {
        console.log("get response failed!");
      }
    );
  }, []);

  const handleSelect = (firstID, firstName, secondID, secondName) => {
    const selectKey = `${firstID},${firstName},${secondID},${secondName}`
    sessionStorage.setItem(classSelectKey, selectKey)
    navigate('/aboutClass')
    document.location.reload();

  }

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

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊<br/>
          1. 上方功能區塊、2. 中央內容區塊、3.下方功能區塊。<br/><br/>

          本網站的快速鍵﹝Accesskey﹞設定如下：<br/>
          Alt+U：上方選單連結區，此區塊列有本網站的主要選單。<br/>
          Alt+C：中間主要內容區，此區塊呈現網頁的網頁內容。<br/>
          Alt+Z：下方連絡區，此區塊列有資訊安全政策、隱私權政策等連結。<br/>
          Firefox瀏覽器若要存取上述快速鍵需加按shift鍵，如Alt+Shift+U來存取上方選單連結區。<br/><br/>
          <b className="note">課程區請先回首頁登入身分後開啟連結</b>
        </div>
      </section>
      <section id="sitemap">
        <div className="footer-top">
          <div className="container">
            <div className="col-lg-12 col-md-6 footer-links">
              <h4>課程區</h4>
              <ul>
                <li><a className="nav-link scrollto" onClick={scrollHandle} id="about-" title="金檢學堂"
                       href="">金檢學堂</a></li>
                <li><a className="nav-link scrollto" onClick={scrollHandle} id="hero-" title="學習地圖"
                       href="">學習地圖</a></li>
                <li><a className="nav-link scrollto" onClick={scrollHandle} id="contact-" title="意見區"
                       href="">意見區</a></li>
                <li><a className="nav-link scrollto" href="/suggestion" title="評價結果">評價結果</a></li>
              </ul>
            </div>
              <div className="col-lg-12 col-md-6 footer-links">
                <h4>選單區</h4>
                <ul>
                  {subjectList.map((list) => (
                    <li key={"sitemap" + list.subjectID}>
                      <i className="bx bx-chevron-right"></i>
                      {list.subjectID}.{list.subjectName}
                      {list.subjectList.map((item) => {
                        return userLogin === true ?
                          <a href="#" key={item.subjectID} title={item.subjectID + "." + item.subjectName}
                             onClick={() => handleSelect(list.subjectID, list.subjectName, item.subjectID, item.subjectName)}>{item.subjectID}.{item.subjectName}</a>
                          :
                          <div key={item.subjectID}>{item.subjectID}.{item.subjectName}</div>
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>


    </main>
)
}

export default Sitemap
