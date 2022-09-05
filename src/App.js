import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderTop from "./components/Top-Level/HeaderTop";

import Home from "./components/pages/Home";
import Sweets from "./components/pages/Sweets";
import Namkeen from "./components/pages/Namkeen";
import RajasthaniDelight from "./components/pages/RajasthaniDelight";
import TeejSpecial from "./components/pages/TeejSpecial";
import GiftShop from "./components/pages/GiftShop";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/namkeen" element={<Namkeen />} />
          <Route path="/rajasthani-delight" element={<RajasthaniDelight />} />
          <Route path="/teej-rakhi-special" element={<TeejSpecial />} />
          <Route path="/gift-shop" element={<GiftShop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
