// components
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";

const Layout = ({children}) => {
  return (
    <>

      <Menu/>
       {children}
      <a accessKey="Z" className="accesskey" href="#aZ" id="aZ" title="下方功能區塊">:::</a>
      <Footer/>
    </>
  );
};

export default Layout;
