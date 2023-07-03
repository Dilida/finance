import {useNavigate} from 'react-router-dom';
import {postUser} from '../utils/post'
import {post} from "../utils/http";

const UserLogin = () => {
  const userList = [
    {"id": 1, "name": "社會大眾"},
    {"id": 2, "name": "金融機構"},
    {"id": 3, "name": "學生"},
    {"id": 4, "name": "本會各局處"}
  ]
  const navigate = useNavigate();
  const handlePostUser = (userId) => {
    const obj = [{"userId": userId}]
    postUser(obj).then(
      (res) => {
        console.log("get article response:", res);
      },
      (error) => {
        console.log("get response failed!");
      }
    );

    navigate('/aboutClass')
  }

  return (
    <div className="row">
      {userList.map((list) => (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100"
             key={list.id}>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-body"></i></div>
            <h4 className="title"><a href="">{list.name}</a></h4>
            <div className="btn-get-started" onClick={() => handlePostUser(list.id)}>進入課程 Start</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserLogin
