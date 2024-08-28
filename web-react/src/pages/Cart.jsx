import React from "react";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import Card from "./Card";
function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div className="flex-wrap">
      <h1>your items</h1>
      {items && items.map((item) => (
        <>
        <div className="product box w-72 ">
        <img className="headset" src={item.thumbnail} alt="asd" />
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <br />
        <p className="text-red-900">{item.description}</p>
    <br /> 

    <div className="">
    <button>-</button>

    <button
      onClick={() => addToCart({
        thumbnail: item.thumbnail,title: item.title, description: item.description
      })}
      className=" button text-green-400"
      to="/your-cart"
    >
      Add To Cart
    </button>

    <button>+</button>
    
    </div>
  </div>
        </>
      ))}{" "}
    </div>
  );
}

export default Cart;
