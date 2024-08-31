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
      const productsWithPrices = response.data.products.map((product) => ({
        ...product,
        price: (Math.random() * (100 - 10) + 10).toFixed(2),
        quantity: 0
      }));
      console.table(productsWithPrices)
      setProducts(productsWithPrices);
    }
    fetchData();
  }, []);

  return (
    <div className="middle">
      <div className="prosec">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => {
            return (
              <div key={product.id} className="product box w-72 p-4 m-4 border rounded-lg shadow-lg">
                <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.title} />
                <h1 className="ch text-xl font-semibold mt-2">{product.title}</h1>
                <p className="text-red-900 mt-2">{product.description}</p>
                <p className="mt-2">Price: ${product.price} USD</p>
                <button
                  onClick={() =>
                    addToCart(product)
                  }
                  className="button bg-blue-500 text-white py-2 px-4 rounded mt-4"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;