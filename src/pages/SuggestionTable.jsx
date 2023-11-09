import {getSuggestionValue} from "../utils/api";
import {useState, useEffect} from "react";
import Meta from "../components/Meta";

const SuggestionTable = () => {
  const [testValue, setTestValue] = useState([])
  useEffect(() => {
    getSuggestionValue().then(
      (res) => {
        console.log('res', res)

        setTestValue(res)
      },
      (e) => {
        console.log("get response failed!");
      })
  }, [])


  return (
    <main id="main">
      <Meta title="單元評價結果" />
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>單元評價結果</h2>
          </div>

        </div>
      </section>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <table className="table">
            <thead>
            <tr>
              <th scope="col">主題單元</th>
              <th scope="col">評價</th>
              <th scope="col">人氣（人次）</th>
            </tr>
            </thead>
            <tbody>
            {testValue.map((item, index) => (
              <tr key={"score" + index}>
                <td>{item.title}</td>
                <td>{item.value} 顆星</td>
                <td>{item.count}</td>
              </tr>
            ))}

            </tbody>
          </table>

        </div>
      </section>

    </main>
  )
}

export default SuggestionTable
