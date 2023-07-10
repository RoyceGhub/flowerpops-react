import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import AboutUsPage from "./Components/AboutUsPage";
import Flowers from "./Components/Flowers";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
