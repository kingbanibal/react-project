import axios from "axios";
import { createContext, useEffect, useState } from "react";


const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  console.log(items);

  const addToCart = (product) => {
    setItems((prevState) => {
      // Check if the item already exists in the cart
      const itemExists = prevState.some(item => item.title === product.title);

      if (itemExists) {
        // If the item exists, return the previous state without adding the new item
        return prevState;
      } else {
        // If the item does not exist, add it to the cart
        return [
          ...prevState,
          {
            thumbnail: product.thumbnail,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: product.quantity
          },
        ];
      }
    });
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;


// createContext is used to create a new context object called CartContext.
// This context will be used to share data (the cart items) across
// different components without passing props manually at every level.
// const CartContext = createContext();

// CartProvider is a functional component that will wrap around other components to provide them with access to the cart context.
// useState is used to create a state variable items and a function setItems to update it. Initially, items is an empty array.
// export function CartProvider({ children }) {
//   const [items, setItems] = useState([]);
//   console.log(items)
  // addToCart is a function that takes a product object as an argument
  // It updates the items state by adding the new product to the existing list of items
  // The new product includes its thumbnail, title, and description
  // const addToCart = (product) => {
  //   setItems((prevState) => [
      
  //     ...prevState,
  //     {
  //       thumbnail: product.thumbnail,
  //       title: product.title,
  //       description: product.description,
  //       price: product.price,
  //       quantity: product.quantity
  //     },
  //   ]);
  // };

// The CartProvider component returns a CartContext.Provider component
// The value prop of the provider is an object containing the items array and the addToCart function
// {children} represents any child components that will be wrapped by CartProvider. These children will have access to the context values
//   return (
//     <CartContext.Provider value={{ items, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }
// CartContext is exported as the default export of the module, making it available for import in other parts of the application
// export default CartContext;
