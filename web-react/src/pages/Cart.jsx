import React from "react";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import Card from "./Card";
function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <h1>your items</h1>
      {items.map((item) => (
        <Card
        // thumbnail={item.thumbnail}
        // title={item.title}
        description={item.description}
        />
      ))}{" "}
    </div>
  );
}

export default Cart;
