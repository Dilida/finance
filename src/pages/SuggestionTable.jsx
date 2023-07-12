
const AboutClass = () => {
  return (
    <main id="main">

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>單元評價結果</h2>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">主題單元</th>
              <th scope="col">評價</th>
              <th scope="col">人氣（人次）</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">01</th>
              <td>存款業務 - A.存款業務及開戶審查 </td>
              <td>4.7 顆星</td>
              <td>173</td>
            </tr>
            <tr>
              <th scope="row">02</th>
              <td>金融商品銷售 - C.銷售管理機制及客訴處理</td>
              <td>5.0 顆星</td>
              <td>991101</td>
            </tr>
            <tr>
              <th scope="row">03</th>
              <td>證券經紀業務 - 證券經紀業務 </td>
              <td>3.1 顆星</td>
              <td>292930</td>
            </tr>
            </tbody>
          </table>

        </div>
      </section>

    </main>
  )
}

export default AboutClass
