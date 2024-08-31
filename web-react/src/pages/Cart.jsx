import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import Card from "./Card";

function Cart() {
  const { items, removeFromCart, addToCart, emptyCart } = useContext(CartContext);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity,0);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="relative min-h-screen">
      <h1 className="header2">Your Items</h1>
      <div className="flex flex-wrap">
        {items.map((item) => (
          <div key={item.title} className="product box w-72">
            <img src={item.thumbnail} alt={item.title} />
            <div className="ml-4">
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <p className="text-red-900">{item.description}</p>
              <p className="mt-2">Price: ${item.price} USD</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-600"
                >
                  -
                </button>
                <p className="mx-2">{item.quantity}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="text-green-400"
                >
                  +
                </button>
                <button
                  onClick={() => emptyCart(item.id)}
                  className="ml-4 text-green-400"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-0 w-full p-4 border-t border-gray-300 bg-white">
        <h2 className="text-2xl font-semibold">
          Total Quantity: {totalQuantity}
        </h2>
        <h2 className="text-2xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)} USD
        </h2>
        <button className="button bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Cart;
