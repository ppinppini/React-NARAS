import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/country/:code" element={<Country></Country>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </Layout>
  );
}

export default App;
