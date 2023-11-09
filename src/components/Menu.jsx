import React, { useEffect, useState, useContext} from "react";
import {Container} from "react-bootstrap";
import {userLoginKey} from "../config";
import Logo from '../assets/img/logo.png'
import GlobalState from "../context/MenuSelect";

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState([])

  const [userLogin, setUserLogin] = useState(false)
  const {loginContext } = useContext(GlobalState)


  useEffect(() => {
    if (sessionStorage.getItem(userLoginKey)) {
      setUserLogin(true)
    }


  }, [loginContext])

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }


  const scrollHandle = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "/#" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    if (!mobileMenu) {
      setMobileMenu(true)
    }
  }


  return (
    <Container>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <div className="row">
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <a href="/" title="e化金檢知識網" tabIndex="0"><img src={Logo} alt="金融監督管理委會員檢查局"/></a>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-light"><a href="/" title="e化金檢知識網"  tabIndex="0"><span><strong>e</strong>化金檢知識網</span></a></h1>
              </div>
            </div>

          </div>

          <nav id="navbar" className={mobileMenu ? "navbar" : "navbar navbar-mobile"}>
            <ul>
              {/*<li><a className="accesskey" href="#aU" id="aU" accessKey="U" title="上方功能區塊" tabIndex="2">:::</a></li>*/}
              <li>
                <a className="nav-link scrollto" role="menuitem" tabIndex="1" onClick={scrollHandle} id="about-" title="回首頁" href="">回首頁</a></li>
              {userLogin ?<li><a className="nav-link scrollto" role="menuitem" tabIndex="0" href="/classFirst" title="課程列表">課程列表</a></li>: null}
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="1" href="/sitemap" title="網站導覽">網站導覽</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="1" onClick={scrollHandle} id="hero-" title="學習地圖" href="">學習地圖</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="1" title="意見區" href="/sectionSuggestion">意見區</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="1" href="/suggestion" title="評價結果">評價結果</a></li>

              {userLogin ? null:  <li><a className="getstarted scrollto" tabIndex="1" onClick={scrollHandle} id="services-" title="進入課程" href="">進入課程</a></li>}

            </ul>
            <i className={mobileMenu ? "bi bi-list mobile-nav-toggle" : "bi mobile-nav-toggle bi-x"}
               onClick={handleMobileMenu}></i>
          </nav>

        </div>
      </header>
    </Container>
  );
};

export default Menu;
