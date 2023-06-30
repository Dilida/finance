import React, {useState} from "react";
import { Nav, Container } from "react-bootstrap";

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState([])
  const [dropDown, setDropDown] = useState([])
  const [dropDown2, setDropDown2] = useState([])

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

  return (
    <Container>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <h1 className="text-light"><a href="/"><span><strong>e</strong> 化金檢知識網</span></a></h1>
          </div>

          <nav id="navbar" className={mobileMenu ? "navbar" : "navbar navbar-mobile"}>
            <ul>
              <li><a className="nav-link scrollto active" href="#about">金檢學堂</a></li>
              <li><a className="nav-link scrollto" href="#about">學習架構介紹</a></li>
              <li className="dropdown">
                <a href="#" onClick={handleDropDown}><span>課程區</span> <i className="bi bi-chevron-down"></i></a>
                <ul className={dropDown ? "" : "dropdown-active"}>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown">
                    <a href="#" onClick={handleDropDown2}><span>Deep Drop Down</span><i className="bi bi-chevron-right"></i></a>
                    <ul className={dropDown2 ? "" : "dropdown-active"}>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">意見區</a></li>
              <li><a className="getstarted scrollto" href="#services">進入課程</a></li>
            </ul>
            <i className={mobileMenu ? "bi bi-list mobile-nav-toggle" : "bi mobile-nav-toggle bi-x" } onClick={handleMobileMenu}></i>
          </nav>

        </div>
      </header>
    </Container>
  );
};

export default Menu;
