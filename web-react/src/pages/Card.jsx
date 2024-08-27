import React from 'react'
import { useContext } from 'react'
import CartContext from "../CartContext";
 export default function Card ({thumbnail,title,description}) {
  return (
    <div className="product box w-72 ">
    <img className="headset" src={thumbnail} alt="asd" />
    <h1 className="text-3xl font-semibold">{title}</h1>
    <br />
    <p className="text-red-900">{description}</p>
    <br /> 

    <div className="">
    <button>-</button>

    <button
      onClick={() => addToCart({
        thumbnail,title,description
      })}
      className=" button text-green-400"
      to="/your-cart"
    >
      Add To Cart
    </button>

    <button>+</button>
    
    </div>
  </div>
  )
}
