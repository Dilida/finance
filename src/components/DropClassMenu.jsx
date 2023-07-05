import React, {useEffect, useState} from "react";
import {getSubjectList} from "../utils/api";


const DropClassMenu = ({dropDown, dropDown2, handleDropDown, handleDropDown2, handleSelect}) => {
  const [subjectList, setSubjectList] = useState([])
  useEffect(() => {
    getSubjectList().then(
      (res) => {
        console.log("get article response:", res);
        setSubjectList(res)
      },
      (e) => {
        console.log("get response failed!");
      }
    );
  }, []);

  return (
    <li className="dropdown">
      <a href="#" onClick={() => handleDropDown()}><span>課程區</span> <i className="bi bi-chevron-down"></i></a>
      <ul className={dropDown ? "" : "dropdown-active"}>
        {subjectList.map((list) => (
          <li key={list.subjectID} className="dropdown">
            <a href="#" onClick={() => handleDropDown2()}>
              <span>{list.subjectID}.{list.subjectName}</span>
              <i className="bi bi-chevron-right"></i>
            </a>
            <ul className={dropDown2 ? "" : "dropdown-active"}>
              {list.subjectList.map((item) =>(
                <li key={item.subjectID}><a href="#" onClick={()=>handleSelect(list.subjectID, item.subjectID)}>{item.subjectID}.{item.subjectName}</a></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default DropClassMenu
