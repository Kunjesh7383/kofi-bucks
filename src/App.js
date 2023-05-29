// import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/item-order" element={<Card />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;