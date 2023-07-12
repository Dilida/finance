import React, {useEffect, useState} from "react";
import {getSubjectList} from "../utils/api";
import {classSelectKey} from "../config";


const DropClassMenu = ({dropDown, handleDropDown,  handleSelect}) => {
  const [subjectList, setSubjectList] = useState([])

  useEffect(() => {
    getSubjectList().then(
      (res) => {
        console.log("get article response:", res);
        setSubjectList(res)
        const selectKey = `01,存款業務,A,存款業務及開戶審查`
        sessionStorage.setItem(classSelectKey,selectKey)
      },
      (e) => {
        console.log("get response failed!");
      }
    );
  }, []);

  return (
    <li className="dropdown">
      <a href="#" onClick={() => handleDropDown()} title="課程列表" aria-expanded="false" aria-label="課程選單展開/收合"><span>課程區</span> <i className="bi bi-chevron-down"></i></a>
      <ul className={dropDown ? "" : "dropdown-active"}>
        {subjectList.map((list) => (
          <li key={list.subjectID} className="dropdown">
            <a href="#" title={list.subjectID+"."+list.subjectName}>
              <span>{list.subjectID}.{list.subjectName}</span>
              <i className="bi bi-chevron-right"></i>
            </a>
            <ul className="dropdown-active">
              {list.subjectList.map((item) => (
                <li key={item.subjectID}>
                  <a href="#" title={item.subjectID+"."+item.subjectName} onClick={() => handleSelect(list.subjectID, list.subjectName, item.subjectID, item.subjectName)}>{item.subjectID}.{item.subjectName}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default DropClassMenu
