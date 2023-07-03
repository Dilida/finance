
const DropClassMenu = ({dropDown, dropDown2, handleDropDown, handleDropDown2}) => {
  return (
    <li className="dropdown">
      <a href="#" onClick={()=>handleDropDown()}><span>課程區</span> <i className="bi bi-chevron-down"></i></a>
      <ul className={dropDown ? "" : "dropdown-active"}>
        <li><a href="#">Drop Down 1</a></li>
        <li className="dropdown">
          <a href="#" onClick={()=>handleDropDown2()}><span>Deep Drop Down</span><i className="bi bi-chevron-right"></i></a>
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
  )
}

export default DropClassMenu
