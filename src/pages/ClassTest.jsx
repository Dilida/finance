import React, {useEffect, useState} from "react";
import {getClassValue} from "../utils/api";
import {userLoginKey, selectClassTitle} from "../config";
import {useNavigate, useLocation} from "react-router-dom";


const ClassTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bigTitle = sessionStorage.getItem(selectClassTitle)
  const folderId = new URLSearchParams(location.search).get('folderId')
  const [testList, setTestList] = useState([])

  useEffect(() => {
    let isUnmounted = false
    getClassValue(folderId).then(
      (res) => {
        if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
          navigate("/")
        }
        console.log('res', res)
        setTestList(res)
      },
      (e) => {
        console.log("get response failed!");
      })

    return () => isUnmounted = true
  }, []);


  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">{bigTitle}</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li><a href="/classList">回課程列表頁</a></li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-9">

            </div>
            <div className="col-lg-3">
              <div className="portfolio-info">

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grade">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h4>單元評價</h4>

              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default ClassTest
