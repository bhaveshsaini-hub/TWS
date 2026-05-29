import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import ScrollReveal from "./components/ScrollReveal";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollReveal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:slug" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;