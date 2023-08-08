import React, {useEffect, useState} from "react";
import {getClassValue} from "../utils/api";
import {userLoginKey, selectClassTitle} from "../config";
import {useNavigate, useLocation} from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Spinner from "react-bootstrap/Spinner";


const ClassTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bigTitle = sessionStorage.getItem(selectClassTitle)
  const folderId = new URLSearchParams(location.search).get('folderId')
  const [testList, setTestList] = useState([])
  const [rightAnswer, setRightAnswer] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isUnmounted = false
    getClassValue(folderId).then(
      (res) => {
        if (sessionStorage.getItem(userLoginKey) === null && !isUnmounted) {
          navigate("/")
        }
        setLoading(false)
        setTestList(res)
      },
      (e) => {
        console.log("get response failed!");
      })

    return () => isUnmounted = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleChange = (event) => {
    const selectNo = event.target.name
    const newValue = testList.map(item => {
      if (item.quesNo === selectNo) {
        item.selectValue = parseInt(event.target.value)
      }
      return item
    })
    setTestList(newValue)

  }
  const handleSubmit = event => {
    event.preventDefault();
    const submitNo = event.target.name
    const newValue = testList.map(item => {
      if (item.quesNo === submitNo) {
        item.answer = item.idxAns === item.selectValue ? true : false
        item.show = true
      }
      return item
    })

    const countAnswer = newValue.filter(item => item.answer === true)
    setTestList(newValue)
    setRightAnswer(countAnswer.length)
  }


  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">{bigTitle}</h2>
            <ol aria-label="Breadcrumb" role="navigation">
              <li><a href="/classTable">回課程列表頁</a></li>
            </ol>
          </div>

        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="faq" className="faq">
        <div className="container">
          {loading ?   <div className="text-center"><Spinner animation="border" variant="success"/></div>
            :
            <ul className="faq-list" data-aos="fade-up">
              {testList.map((item) => (
                <li key={item.quesNo+"li"}>
                  <form className="php-email-form"  name={item.quesNo} onSubmit={handleSubmit}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title question">{item.quesNo}. {item.question}</h5>
                        {item.ansOption.map((option, index)=>(
                          <div className="form-check mb-2 ms-3" key={item.quesNo+"star"+(index+1)}>
                            <label htmlFor={item.quesNo+"star"+(index+1)}>{option}</label>
                            <input id={item.quesNo+"star"+(index+1)} className="form-check-input" type="radio" name={item.quesNo} value={index+1} required  disabled={item.show} onChange={handleChange}/>
                          </div>
                        ))}

                      </div>
                      <div className="mb-3 ms-3 me-3">
                        {item.show ? null : <button type="submit">送出回答</button>}
                        {item.show ? <Alert key="success" variant={item.answer?"success":"warning"}>{item.ansDesc}</Alert> : null}
                      </div>
                    </div>
                  </form>
                </li>
              ))}

            </ul>
          }



          <div className="back-to-top d-flex align-items-center justify-content-center">您答對 {rightAnswer} 題</div>
        </div>
      </section>
    </main>
  )
}

export default ClassTest
