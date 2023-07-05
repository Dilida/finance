import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import DropClassMenu from "./DropClassMenu";
import {userLoginKey} from "../config";



const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState([])
  const [dropDown, setDropDown] = useState([])
  const [dropDown2, setDropDown2] = useState([])
  const [userLogin, setUserLogin] = useState(false)

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
  }

  const handleSelect = (first, second) => {
    console.log(first,second)
    window.location.href = "/aboutClass?title="+first+"&sub="+second
  }

  return (
    <Container>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <h1 className="text-light"><a href="/"><span><strong>e</strong> 化金檢知識網</span></a></h1>
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
              <li><a className="nav-link scrollto" onClick={scrollHandle} id="about-">金檢學堂</a></li>
              <li><a className="nav-link scrollto" onClick={scrollHandle} id="hero-">學習地圖</a></li>
              <li><a className="nav-link scrollto" onClick={scrollHandle} id="contact-">意見區</a></li>
              <li><a className="nav-link scrollto" href="/suggestion">評價結果</a></li>
              {userLogin ? null:  <li><a className="getstarted scrollto" onClick={scrollHandle} id="services-">進入課程</a></li>}

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
