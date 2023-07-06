import React, {useEffect, useState, useContext} from "react";
import {getSubjectList} from "../utils/api";
import {ClassContext} from "../context/ClassLists";


const DropClassMenu = ({dropDown, dropDown2, handleDropDown, handleDropDown2, handleSelect}) => {
  const [subjectList, setSubjectList] = useState([])
  const {saveClassItem} = useContext(ClassContext)

  useEffect(() => {
    getSubjectList().then(
      (res) => {
        console.log("get article response:", res);
        setSubjectList(res)
        saveClassItem(res[0].subjectID, res[0].subjectName, res[0].subjectList[0].subjectID, res[0].subjectList[0].subjectName)
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
              {list.subjectList.map((item) => (
                <li key={item.subjectID}><a href="#" onClick={() => handleSelect(list.subjectID, list.subjectName, item.subjectID, item.subjectName)}>{item.subjectID}.{item.subjectName}</a>
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
