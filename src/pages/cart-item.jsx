import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { products } from "../database/data";
import './cart-item.css'

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
          { (products[id - 1].purchased === products[id - 1].available) ? <div className="out-of-stock"> Out of stock </div> : <span></span> }
        </div>
      </div>
    </div>
  );
};
