import React, {useEffect, useState} from "react";
import {getClassValue} from "../utils/api";
import {userLoginKey, selectClassTitle} from "../config";
import {useNavigate, useLocation} from "react-router-dom";
import Alert from 'react-bootstrap/Alert';


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


  const handleChange = (event) => {
    console.log('value', parseInt(event.target.value))
    console.log('questionNo', event.target.name)
  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log('iiiiii', event.target.value)
  }


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
      <section id="faq" className="faq">
        <div className="container">
          <ul className="faq-list" data-aos="fade-up">
            {testList.map((item) => (
              <li key={item.quesNo}>
                <form className="php-email-form" onSubmit={handleSubmit}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title question">{item.quesNo}. {item.question}</h5>
                      {item.ansOption.map((option, index)=>(
                        <div className="form-check mb-2 ms-3" key={item.quesNo+"star"+(index+1)}>
                          <label htmlFor={item.quesNo+"star"+(index+1)}>{option}</label>
                            <input id={item.quesNo+"star"+(index+1)} className="form-check-input" type="radio" name={item.quesNo} value={index+1} required  onChange={handleChange}/>
                        </div>
                      ))}

                    </div>
                    <div className="mb-3 ms-3 me-3">
                      <button type="submit">送出回答</button>
                      <Alert key="success" variant="success">{item.ansDesc}</Alert>
                    </div>
                  </div>
                </form>
              </li>
            ))}

          </ul>
        </div>
      </section>


    </main>
  )
}

export default ClassTest
