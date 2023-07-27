import {useNavigate} from 'react-router-dom';
import {postUser} from '../utils/api'

import { userLoginKey } from "../config";
import {useContext} from "react";
import GlobalState from "../context/MenuSelect";


const UserLogin = () => {
  const userList = [
    {"id": 1, "name": "社會大眾"},
    {"id": 2, "name": "金融機構"},
    {"id": 3, "name": "學生"},
    {"id": 4, "name": "本會各局處"}
  ]
  const navigate = useNavigate();
  const { changeItem, changeLogin } = useContext(GlobalState)
  const handlePostUser = (userId) => {
    const postUserObj = {
      "roleId": userId
    }
    postUser(postUserObj).then(
      (res) => {
        sessionStorage.setItem(userLoginKey, userId);
        const selectKey = `01,存款業務,A,存款業務及開戶審查`
        navigate('/aboutClass')
        changeItem(selectKey)
        changeLogin()
      },
      (e) => {
        console.log("get response failed!");
      }
    );
  }

  return (
    <div className="row">
      {userList.map((list) => (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100"
             key={list.id}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-body" title={list.name}></i></div>
            <h3 className="title"><a href="" role="loginitem" tabIndex="0" onClick={() => handlePostUser(list.id)} title={list.name}>{list.name}</a></h3>
            <div className="btn-get-started" onClick={() => handlePostUser(list.id)}>進入課程 Start</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserLogin
