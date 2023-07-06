// components
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";
import ClassContextProvider from "../context/ClassLists"

const Layout = ({children}) => {
  return (
    <>
      <ClassContextProvider>
        <Menu/>
        <main>{children}</main>
        <Footer/>
      </ClassContextProvider>
    </>
  );
};

export default Layout;
