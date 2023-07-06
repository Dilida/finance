
import {sample1, dataURItoBlob, encode, base64ToArrayBuffer, base64Image} from '../encryption/sample1'
import { AES, enc } from 'crypto-js';
const AboutClass =() =>{
  const myKey = "my-secret-key@123"
  const ciphertext = AES.encrypt(JSON.stringify(sample1), myKey).toString();

  // const trans2Array = base64ToArrayBuffer(sample1)
  // const newBytes = new Uint8Array(trans2Array)
  // const newImage = "data:image/jpeg;base64," +encode(newBytes)


  //以下可用，要留下來 blob file
  const blob = dataURItoBlob(base64Image +sample1)
  const blobUrl = URL.createObjectURL(blob) // blob is the Blob object
  const newImage =  blobUrl // image is the image element from the DOM

  console.log("blob")
  console.log(blob)
  console.log("newImage")
  console.log(newImage)
  // URL.revokeObjectURL(blobUrl)

  return (
    <main id="main">

      <section className="breadcrumbs">
        <div className="container">

          {/*<div className="d-flex justify-content-between align-items-center">*/}
          {/*  <h2>課程內容</h2>*/}
          {/*  <ol>*/}
          {/*    <li>01.存款業務</li>*/}
          {/*    <li>A.存款業務及開戶審查</li>*/}
          {/*    <li>檢查重點</li>*/}
          {/*  </ol>*/}
          {/*</div>*/}

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">

                  <img src={newImage}/>
                  {/*iframe 插入奇妙的頁面*/}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>A.存款業務及開戶審查</h3>
                <ul>
                  <li><strong>課程內容</strong>: 1.1 存款業務簡介 / 1.2 開戶審查</li>
                  <li><strong>檢查重點</strong></li>
                  <li><strong>個案分享</strong></li>
                  <li><strong>參考資料</strong></li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="grade">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h4>單元評價</h4>
                {/*單元評價 radio button*/}
                {/*看評價結果*/}
                <form className="row gy-2 gx-6">
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="form-check col-auto">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="col-2">
                    <input type="submit" value="送出意見"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default AboutClass
