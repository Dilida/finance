const UserLogin = () => {
  const userList = [
    {"id": 1, "name": "社會大眾"},
    {"id": 2, "name": "金融機構"},
    {"id": 3, "name": "學生"},
    {"id": 4, "name": "本會各局處"}
  ]

  const handlePostUser = (userId) => {
    console.log(userId)
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