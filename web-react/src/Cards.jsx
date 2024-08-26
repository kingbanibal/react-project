import headset from "./assets/headset.webp"
import controller from "./assets/controller.jpg"
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <div className="middle">
      <div className="prosec">
        <div className="prosec1">
          <div className="product box">
            <img className="headset" src="src/assets/headset.webp" alt="asd" />
            <h1>HyperX headset</h1>
            <p>Works With PS4, PS5, XBOX SERIES X, PC</p>
            <button className="button">Add To Cart</button>
          </div>
          <div className="product box">
            <img className="controller" src="src/assets/controller.jpg" alt="asd" />
            <h1>PS5 controller</h1>
            <p>Works With PS4, PS5, XBOX SERIES X, PC</p>
            <button className="button">Add To Cart</button>
          </div>
        </div>
        <div className="prosec2">
          <div className="product box">
            <img className="headset" src="src/assets/headset.webp" alt="asd" />
            <h1>HyperX headset</h1>
            <p>Works With PS4, PS5, XBOX SERIES X, PC</p>
            <button className="button">Add To Cart</button>
          </div>
          <div className="product box">
            <img className="controller" src="src/assets/controller.jpg" alt="asd" />
            <h1>PS5 controller</h1>
            <p>Works With PS4, PS5, XBOX SERIES X, PC</p>
            <Link className="button" to="/contact-us"><div className="logo">Shop</div>Add To Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
