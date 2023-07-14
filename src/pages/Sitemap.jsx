import Reactfrom "react";

const Sitemap = () => {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2 aria-current="page">網站導覽</h2>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊
          1. 上方功能區塊、2. 中央內容區塊、3.下方功能區塊。

          本網站的快速鍵﹝Accesskey﹞設定如下：
          Alt+U：上方選單連結區，此區塊列有本網站的主要選單、回首頁、網站導覽、網站搜尋等。
          Alt+C：中間主要內容區，此區塊呈現網頁的網頁內容。
          Alt+Z：下方連絡區，此區塊列有資訊安全政策、隱私權政策等連結。
          Firefox瀏覽器若要存取上述快速鍵需加按shift鍵，如Alt+Shift+U來存取上方選單連結區。
        </div>
      </section>



    </main>
  )
}

export default Sitemap
