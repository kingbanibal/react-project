import headset from "./assets/headset.webp";
import controller from "./assets/controller.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
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
              <div className="product box w-72">
                <img
                  className="headset"
                  src={product.thumbnail}
                  alt="asd"
                />
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <Link className="button" to="/contact-us">
                  Add To Cart
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
