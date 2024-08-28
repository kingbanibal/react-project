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
          <div className="text-xl font-bold">Shop</div>
        </Link>
        <button className="lg:hidden text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`absolute top-16 left-0 w-full bg-white shadow-md lg:static lg:w-auto lg:shadow-none ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <li>
              <Link to="/about-us" className="md: block py-2 px-4 lg:py-0" onClick={toggleMenu}>About Us</Link>
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
        <div className="hidden lg:block">
          <Link to="/your-cart" onClick={toggleMenu}>
            <CiShoppingCart className="text-4xl" />
          </Link>
        </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link to="/">
//           <div className="text-xl font-bold">Shop</div>
//         </Link>
//         <button className="lg:hidden text-xl" onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//         <ul className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? "block" : "hidden"} lg:block`}>
//           <li>
//             <Link to="/about-us" className="block py-2 lg:py-0" onClick={toggleMenu}>About Us</Link>
//           </li>
//           <li>
//             <Link to="/clothing" className="block py-2 lg:py-0" onClick={toggleMenu}>Clothing</Link>
//           </li>
//           <li>
//             <Link to="/products" className="block py-2 lg:py-0" onClick={toggleMenu}>Products</Link>
//           </li>
//           <li>
//             <Link to="/electronics" className="block py-2 lg:py-0" onClick={toggleMenu}>Electronics</Link>
//           </li>
//           <li>
//             <Link to="/decorations" className="block py-2 lg:py-0" onClick={toggleMenu}>Decorations</Link>
//           </li>
//         </ul>
//         <div className="hidden lg:block">
//           <Link to="/your-cart" onClick={toggleMenu}>
//             <CiShoppingCart className="text-xl" />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };


// const Navbar = () => {
//   return (
//     <nav>
//       <div className="menu">
//         <Link to="/">
//           <div className="logo">Shop</div>
//         </Link>
//       </div>
//       <ul>
//         <li className="hidden sm:block">
//           <Link to="/about-us">About Us</Link>
//         </li>
//         <li className="hidden sm:block">
//           <Link to="/clothing">Clothing</Link>
//         </li>
//         <li className="hidden sm:block">
//           <Link to="/products">Products</Link>
//         </li>
//         <li className="hidden sm:block">
//           <Link to="/electronics">Electronics</Link>
//         </li>
//         <li className="hidden sm:block">
//           <Link to="/decorations">Decorations</Link>
//         </li>
//         <li className="licart">
//           <Link to="/your-cart">
//             {" "}
//             <CiShoppingCart className="cart" />{" "}
//           </Link>{" "}
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default Navbar;
