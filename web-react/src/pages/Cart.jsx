import React from "react";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import Card from "./Card";
function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div className=""><h1 className="header2">Your Items</h1> 
     
    <div className="flex justify-items-center ">
      {items.map((item) => (
        <>
        <div className="product box w-72 flex ">
        <img src={item.thumbnail} alt="asd" />
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <br />
        <p className="text-red-900">{item.description}</p>
    <br /> 
    <p className="mt-2">Price: ${item.price} USD</p>
    <br />
    <div className="flex content-between">
    <button className="text-red-600">-
     

    </button>
<p>0</p>
    <button
      onClick={() => addToCart({
        thumbnail: item.thumbnail,title: item.title, description: item.description, price: item.price, quantity: item.quantity
      }
    )}
      className=" button text-green-400"
    >
      +
    </button>
    
    </div>
  </div>
        </>
      ))}{" "}
    </div>
    </div> 
  );
}

export default Cart;
