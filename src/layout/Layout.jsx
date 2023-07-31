// components
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";

const Layout = ({children}) => {
  return (
    <>
      <Menu/>
      <a className="accesskey" href="#aC" id="aC" accessKey="C" title="中間功能區塊" tabIndex="2">:::</a>
       {children}
      <Footer/>
    </>
  );
};

export default Layout;
