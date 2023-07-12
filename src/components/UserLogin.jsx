import {useNavigate} from 'react-router-dom';
import {postUser} from '../utils/api'
import {postUserObj} from '../utils/requestMock'
import {classSelectKey, userLoginKey} from "../config";


const UserLogin = () => {
  const userList = [
    {"id": 1, "name": "社會大眾"},
    {"id": 2, "name": "金融機構"},
    {"id": 3, "name": "學生"},
    {"id": 4, "name": "本會各局處"}
  ]
  const navigate = useNavigate();
  const handlePostUser = (userId) => {
    //todo: change userId
    postUser(postUserObj).then(
      (res) => {
        sessionStorage.setItem(userLoginKey, userId);
        const selectKey = `01,存款業務,A,存款業務及開戶審查`
        sessionStorage.setItem(classSelectKey,selectKey)
        navigate('/aboutClass')
        document.location.reload();
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
            <h4 className="title"><a href="" onClick={() => handlePostUser(list.id)} title={list.name}>{list.name}</a></h4>
            <div className="btn-get-started" onClick={() => handlePostUser(list.id)}>進入課程 Start</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserLogin
