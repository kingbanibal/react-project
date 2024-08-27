import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="menu">
        <Link to="/">
          <div className="logo font-semibold">Shop</div>
        </Link>
      </div>
      <ul>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/clothing">Clothing</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/decorations">Decorations</Link></li>
        <li className="licart">
          <Link to="/your-cart">
            {" "}
            <CiShoppingCart className="cart" />{" "}
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
