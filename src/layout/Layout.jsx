// components
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";
import { Helmet } from 'react-helmet'
const Layout = ({children}) => {
  return (
    <>
      <Menu/>
       {children}
      <Footer/>
    </>
  );
};

export default Layout;
