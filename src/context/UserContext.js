import React, { createContext, useState } from "react";
import { Items } from "../Data/Data";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  //quantity by voice
  const [itemVoiceQuantity, setItemVoiceQuantity] = useState({});
  //add to cart
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (itemId) => {
    Items.map((n) => {
      if (n.id === itemId) {
        setCartItem([...cartItem, n]);
      }
    });
  };

  //add quantity

  return (
    <UserContext.Provider
      value={{
        addToCart,
        cartItem,
        setCartItem,
        itemVoiceQuantity,
        setItemVoiceQuantity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
