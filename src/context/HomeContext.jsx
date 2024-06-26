import React, { createContext, useState } from "react";
import { products } from "../database/data";

export const HomeContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const HomeContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.newPrice;
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    console.log(products[itemId - 1]);
    console.log(cartItems[itemId]);
    if (products[itemId - 1].available > cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      products[itemId - 1].purchased += 1;
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    products[itemId - 1].purchased -= 1;
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
