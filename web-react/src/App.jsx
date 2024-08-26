import * as React from "react";
import "./App.css";
import {Route,Routes,} from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";

import Home from "./pages/Home";
import ContactUs from "./pages/contactUs";
// import ReactDOM from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product/:id" element={<ContactUs />} />
        <Route path="/user/:id" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
