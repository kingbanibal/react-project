import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect, useContext } from "react";
import CartContext from "./CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {items}= useContext(CartContext)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  useEffect(()=>{
    
  },[])
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-3">
      <div className="lg:hidden ">
              <Link to="/your-cart" className="relative">
                <span className="absolute bg-orange-400 text-black py-1 px-3 rounded-full right-[-30px] top-[-10px]">{totalQuantity > 10 ? "+10" :totalQuantity }
                </span>
                <CiShoppingCart className="text-4xl" />
              </Link>
            </div>
        <Link to="/">
          <div className="text-xl font-bold text-darkblue">Shop</div>
        </Link>
        
        <button className="lg:hidden text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
          
        </button>
        <div className={`absolute top-14 w-full bg-white shadow-md lg:static mid lg:w-auto z-10 lg:shadow-none ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:items-end md:space-x-6">
            <li>
              <Link to="/about-us" className="block py-2 px-4 lg:py-0" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/clothing" className="block py-2 px-4 lg:py-0" onClick={toggleMenu}>Clothing</Link>
            </li>
            <li>
              <Link to="/products" className="block py-2 px-4 lg:py-0" onClick={toggleMenu}>Products</Link>
            </li>
            <li>
              <Link to="/electronics" className="block py-2 px-4 lg:py-0" onClick={toggleMenu}>Electronics</Link>
            </li>
            <li>
              <Link to="/decorations" className="block py-2 px-4 lg:py-0" onClick={toggleMenu}>Decorations</Link>
            </li>
            <div className="max-sm:hidden lg:block">
              <Link to="/your-cart" onClick={toggleMenu}>
                <CiShoppingCart className="text-4xl max-sm:xl" />
              </Link>
            </div>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

// useState initializes isOpen to false and provides a function setIsOpen to update it
// toggleMenu is a function that toggles the value of isOpen