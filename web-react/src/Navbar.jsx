import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav>
    <div className="menu">
    <Link to="/"><div className="logo">Shop</div></Link>
        
    </div>
    <ul>
        <li>how it works</li>
        <li>workflow</li>
        <li>download</li>
        <li>download</li>
        <li>download</li>
        <li className="licart"> <CiShoppingCart className="cart" /></li>
       
    </ul>
        </nav>
     );
}
 
export default Navbar;
