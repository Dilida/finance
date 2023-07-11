import React, { useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import DropClassMenu from "./DropClassMenu";
import {userLoginKey, classSelectKey} from "../config";
import {useNavigate} from 'react-router-dom';
import Logo from '../assets/img/logo.png'

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState([])
  const [dropDown, setDropDown] = useState([])  //第一層
  const [dropDown2, setDropDown2] = useState([])  //第二層
  const [userLogin, setUserLogin] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(userLoginKey)) {
      setUserLogin(true)
    }
  }, [])

  const handleMobileMenu = () => {
    setDropDown(true)
    setDropDown2(true)
    setMobileMenu(!mobileMenu)
  }

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  const handleDropDown2 = () => {
    setDropDown2(!dropDown2)
  }

  const scrollHandle = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "/#" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    setMobileMenu(!mobileMenu)
  }

  const handleSelect = (firstID, firstName, secondID, secondName) => {
    const selectKey = `${firstID},${firstName},${secondID},${secondName}`
    sessionStorage.setItem(classSelectKey,selectKey)
    navigate('/aboutClass')
    document.location.reload();

  }

  return (
    <Container>
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
                dropDown2={dropDown2}
                handleDropDown={handleDropDown}
                handleDropDown2={handleDropDown2}
                handleSelect={handleSelect}
              /> : null}
              <li><a className="nav-link scrollto" onClick={scrollHandle} id="about-" title="金檢學堂">金檢學堂</a></li>
              <li><a className="nav-link scrollto" onClick={scrollHandle} id="hero-" title="學習地圖">學習地圖</a></li>
              <li><a className="nav-link scrollto" onClick={scrollHandle} id="contact-" title="意見區">意見區</a></li>
              <li><a className="nav-link scrollto" href="/suggestion" title="評價結果">評價結果</a></li>
              {userLogin ? null:  <li><a className="getstarted scrollto" onClick={scrollHandle} id="services-" title="進入課程">進入課程</a></li>}

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
