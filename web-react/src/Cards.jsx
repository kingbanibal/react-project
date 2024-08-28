import headset from "./assets/headset.webp";
import controller from "./assets/controller.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import CartContext from "./CartContext";

const Cards = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }
    fetchData();
  }, []);

  return (
    <div className="middle">
      <div className="prosec">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => {
            return (
              <div className="product box w-72 ">
                <img className="headset" src={product.thumbnail} alt="asd" />
                <h1 className="text-xl md:text-3xl font-semibold">{product.title}</h1>
                <br />
                <p className="text-red-900">{product.description}</p>
                <br /> 

                <div className="">
                <button>-</button>

                <button
                  onClick={() => addToCart({thumbnail:product.thumbnail ,title:product.title,description:product.description })}
                  className=" button text-green-400"
                  to="/your-cart"
                >
                  Add To Cart
                </button>

                <button>+</button>
                
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
