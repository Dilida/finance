
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import AboutClass from "./pages/AboutClass";
import NotFound from "./pages/NotFound";
import SuggestionTable from "./pages/SuggestionTable";

const App = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/aboutClass" element={<AboutClass />} />
          <Route path='/suggestion' element={<SuggestionTable />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Layout>
  );
};

export default App;
