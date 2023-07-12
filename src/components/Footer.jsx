const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
      <footer id="footer">

        <div className="container py-4">
          <div className="copyright">
            &copy; <strong><span>{year} 金融監督管理委員會檢查局</span></strong> 版權所有
          </div>
          <div className="credits">
            22041 新北市板橋區縣民大道2段7號14樓 電話：(02)8968-0899
          </div>
        </div>
      </footer>
		</>
	);
};

export default Footer;
