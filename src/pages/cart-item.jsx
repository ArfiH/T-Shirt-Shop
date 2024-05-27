import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export const CartItem = (props) => {
  const { id, img, title, star, reviews, prevPrice, newPrice } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(HomeContext);
  
  return (
    <div className="cartItem">
      <img src={img} />
      <div className="description">
        <p>
          <b> {title} </b>
        </p>
        <p>
          <del> {prevPrice} </del>${newPrice}
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input  onChange={(e) => updateCartItemCount(Number(e.target.value), id)} value = {cartItems[id]} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
