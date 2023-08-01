import {Routes, Route} from "react-router-dom";
// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import ClassList from "./pages/ClassList";
import ClassTable from "./pages/ClassTable";
import ClassTest from "./pages/ClassTest";
import ClassValue from "./pages/ClassValue";
import NotFound from "./pages/NotFound";
import SuggestionTable from "./pages/SuggestionTable";
import Sitemap from './pages/Sitemap'
import {GlobalProvider} from "./context/MenuSelect";

const App = () => {
  return (
    <GlobalProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/classList" element={<ClassList/>}/>
          <Route path="/classTable" element={<ClassTable/>}/>
          <Route path="/classTest" element={<ClassTest/>}/>
          <Route path="/classValue" element={<ClassValue/>}/>
          <Route path='/suggestion' element={<SuggestionTable/>}/>
          <Route path='/sitemap' element={<Sitemap/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Layout>
    </GlobalProvider>
  );
};

export default App;
