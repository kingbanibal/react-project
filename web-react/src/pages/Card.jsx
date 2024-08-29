import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

export default function Card({ thumbnail, title, description }) {
  const { items } = useContext(CartContext);

  return (
    <div className="product box w-72 ">
      <img className="headset" src={thumbnail} alt="asd" />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <br />
      <p className="text-red-900">{description}</p>
      <br />

      <div className="">
        <button
          onClick={() =>
            addToCart({
              thumbnail,
              title,
              description,
              price,
              quan
            })
          }
          className=" button text-green-400"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
