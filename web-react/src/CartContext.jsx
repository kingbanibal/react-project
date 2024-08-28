import axios from "axios";
import { createContext, useEffect, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setItems((prevState) => [
      ...prevState,
      {
        thumbnail: product.thumbnail,
        title: product.title,
        description: product.description,
      },
    ]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
