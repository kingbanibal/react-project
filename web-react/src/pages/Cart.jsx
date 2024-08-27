import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <h1>your items</h1>
      {items.map((item) => (
        <div>{item.product}</div>
      ))}{" "}
      {id}
    </div>
  );
}

export default Cart;
