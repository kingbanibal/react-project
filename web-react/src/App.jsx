import * as React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Decorations from "./pages/Decorations";
import Electronics from "./pages/Electronics";
import Clothing from "./pages/Clothing";
import { CartProvider } from "./CartContext";
// import ContactUs from "./pages/contactUs";
// import ReactDOM from "react";

function App() {
  return (
    <CartProvider>
      <div className="bg-[url('/src/assets/shoping.png')] bg-no-repeat bg-contain">
        <div>
          <Navbar />
        </div>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/your-cart" element={<Cart />} />
          <Route path="/decorations" element={<Decorations />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/clothing" element={<Clothing />} />
          {/* <Route path="/product/:id" element={<ContactUs />} /> */}
          {/* <Route path="/user/:id" element={<ContactUs />} /> */}
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
