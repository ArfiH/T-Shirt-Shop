import React , { useContext } from "react";
import { products } from "../database/data";
import {HomeContext} from '../context/HomeContext'
import { CartItem } from "./cart-item";
import './cart.css'

const Cart = () => {
  const { cartItems }  = useContext(HomeContext);
  
  return <div className="cart">
    <h1>Cart</h1>
    <div className="cartItems">
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return <CartItem key={product._id} data={product} />
        }
      })}
    </div>
  </div>;

};

export default Cart;
