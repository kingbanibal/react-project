 import { createContext, useEffect, useState } from "react";



 const CartContext = createContext();

 export const CartProvider = ({ children }) => {
   const [items, setItems] = useState([]);
 
   const addToCart = (item) => {
     setItems((prevItems) => {
       const existingItem = prevItems.find((i) => i.title === item.title);
       if (existingItem) {
         return prevItems.map((i) =>
           i.title === item.title ? { ...i, quantity: i.quantity + item.quantity } : i
         );
       }
       return [...prevItems, { ...item, quantity: 1 }];
     });
   };
 
   const removeFromCart = (title) => {
     setItems((prevItems) => prevItems.filter((item) => item.title !== title));
   };
 
   return (
     <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
       {children}
     </CartContext.Provider>
   );
 };





// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [items, setItems] = useState([]);
//   console.log(items);

//   const addToCart = (product) => {
//     const itemExists = items.some(item => item.title === product.title);
//     setItems((prevState) => {
//       Check if the item already exists in the cart
//       if (itemExists) {
//         If the item exists, return the previous state without adding the new item
//         return [
//           ...prevState,
//         ];
//       } else {
//         If the item does not exist, add it to the cart
//         return [
//           ...prevState,
//           {
//             thumbnail: product.thumbnail,
//             title: product.title,
//             description: product.description,
//             price: product.price,
//             quantity: product.quantity
//           },
//         ];
//       }
//     });
//   };
//   const removeFromCart = (productTitle) => {
//     setItems((prevState) => prevState.filter(item => item.title !== productTitle));
//   };


//   return (
//     <CartContext.Provider value={{ items, addToCart, removeFromCart}}>
//       {children}
//     </CartContext.Provider>
//   );
// }

export default CartContext;

