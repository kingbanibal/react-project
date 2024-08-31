import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.title === item.title);
      if (existingItem) {
        return prevItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.title === item.title);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevItems.map((i) =>
            i.title === item.title ? { ...i, quantity: i.quantity - 1 } : i
          );
        } else {
          return prevItems.filter((i) => i.title !== item.title);
        }
      }
      return prevItems;
    });
  };
  const emptyCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
