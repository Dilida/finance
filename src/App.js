
import { Routes, Route } from "react-router-dom";
// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import AboutClass from "./pages/AboutClass";
import NotFound from "./pages/NotFound";
import SuggestionTable from "./pages/SuggestionTable";
import Sitemap from './pages/Sitemap'
import MenuSelect from "./context/MenuSelect";

const App = () => {
  return (
    <MenuSelect.Provider value="elllo from context">
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/aboutClass" element={<AboutClass />} />
          <Route path='/suggestion' element={<SuggestionTable />} />
          <Route path='/sitemap' element={<Sitemap />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Layout>
    </MenuSelect.Provider>
  );
};

export default App;
