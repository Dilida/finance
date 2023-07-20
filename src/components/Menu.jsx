import React, { useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import DropClassMenu from "./DropClassMenu";
import {userLoginKey, classSelectKey, classListKey} from "../config";
import {useNavigate} from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import {getClassList} from "../utils/api";

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState([])
  const [dropDown, setDropDown] = useState([])  //第一層
  const [subjectList, setSubjectList] = useState([]) // dropmenu資料來源
  const [userLogin, setUserLogin] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(userLoginKey)) {
      setUserLogin(true)
    }

    if (sessionStorage.getItem(classListKey) === null) {
      getClassList().then(
        (res) => {
          setSubjectList(res)
          sessionStorage.setItem(classListKey, JSON.stringify(res))
          // myArray = `${firstID},${firstName},${secondID},${secondName}`
          let myArray = sessionStorage.getItem(classSelectKey)
          if (myArray === null) {
            const selectKey = `${res[0].id},${res[0].name},${res[0].subjectList[0].id},${res[0].subjectList[0].name}`
            sessionStorage.setItem(classSelectKey,selectKey)
          }

        },
        (e) => {
          console.log("get response failed!");
        })
      return
    }

    setSubjectList(JSON.parse(sessionStorage.getItem(classListKey)))


  }, [])

  const handleMobileMenu = () => {
    setDropDown(true)
    setMobileMenu(!mobileMenu)
  }

  const handleDropDown = () => {
    setDropDown(!dropDown)
    if (mobileMenu !== false){
      handleSelect("01","存款業務","A","存款業務及開戶審查")
    }
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

  const handleSelect = (firstID, firstName, secondID, secondName) => {
    const selectKey = `${firstID},${firstName},${secondID},${secondName}`
    sessionStorage.setItem(classSelectKey,selectKey)
    navigate('/aboutClass')
    document.location.reload()
  }

  return (
    <Container>
      <a className="accesskey" href="#aU" id="aU" accessKey="U" title="上方功能區塊" tabIndex="2">:::</a>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <div className="row">
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <a href="/" title="e化金檢知識網"><img src={Logo} alt="金融監督管理委會員檢查局"/></a>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-light"><a href="/" title="e化金檢知識網"><span><strong>e</strong>化金檢知識網</span></a></h1>
              </div>
            </div>

          </div>

          <nav id="navbar" className={mobileMenu ? "navbar" : "navbar navbar-mobile"}>
            <ul>
              {userLogin ? <DropClassMenu
                dropDown={dropDown}
                handleDropDown={handleDropDown}
                handleSelect={handleSelect}
                subjectList = {subjectList}
              /> : null}
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="0" onClick={scrollHandle} id="about-" title="回首頁" href="">回首頁</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="0" href="/sitemap" title="網站導覽">網站導覽</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="0" onClick={scrollHandle} id="hero-" title="學習地圖" href="">學習地圖</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="0" onClick={scrollHandle} id="contact-" title="意見區" href="">意見區</a></li>
              <li><a className="nav-link scrollto" role="menuitem" tabIndex="0" href="/suggestion" title="評價結果">評價結果</a></li>

              {userLogin ? null:  <li><a className="getstarted scrollto" onClick={scrollHandle} id="services-" title="進入課程" href="">進入課程</a></li>}

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
