import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <div className="text-xl font-bold text-darkblue">Shop</div>
        </Link>
        <button className="lg:hidden text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`absolute top-16 right-0 w-full bg-white shadow-md lg:static lg:w-auto lg:shadow-none ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
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
            <li className="lg:block">
              <Link to="/your-cart" onClick={toggleMenu}>
                <CiShoppingCart className="text-4xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
