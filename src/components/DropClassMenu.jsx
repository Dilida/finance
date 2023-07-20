import React from "react";



const DropClassMenu = ({dropDown, handleDropDown,  handleSelect, subjectList}) => {
  return (
    <li className="dropdown">
      <a href="#" onClick={() => handleDropDown()} title="課程列表" aria-expanded="false" aria-label="課程選單展開/收合"><span>課程區</span> <i className="bi bi-chevron-down"></i></a>
      <ul className={dropDown ? "" : "dropdown-active"}>
        {subjectList.map((list) => (
          <li key={list.id} className="dropdown">
            <a href="#" title={list.id+"."+list.name}>
              <span>{list.id}.{list.name}</span>
              <i className="bi bi-chevron-right"></i>
            </a>
            <ul className="dropdown-active">
              {list.subjectList.map((item) => (
                <li key={item.id}>
                  <a href="#" title={item.id+"."+item.name} onClick={() => handleSelect(list.id, list.name, item.id, item.name)}>{item.id}.{item.name}</a>
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
