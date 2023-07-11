import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUsPage from "./AboutUsPage";
import Flowers from "./Flowers";
import ContactUs from "./ContactUs";
import Cart from "./Cart";

export default function HomeRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/Flowers" element={<Flowers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
