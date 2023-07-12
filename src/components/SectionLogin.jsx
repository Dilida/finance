
import UserList from "./UserLogin"
const SectionLogin = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <p>請選擇使用身份</p>
        </div>

        <UserList />

      </div>
    </section>
  )
}

export default SectionLogin
