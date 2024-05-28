import React , { useContext } from "react";
import { products } from "../database/data";
import {HomeContext} from '../context/HomeContext'
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import './cart.css'

const Cart = () => {
  const { cartItems, getTotalCartAmount }  = useContext(HomeContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return <div className="cart">
    <h1>Cart</h1>
    <div className="cartItems">
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return <CartItem key={product._id} data={product} />
        }
      })}

      <div className="checkout">
        <p> Total amount: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout </button>
      </div>
    </div>
  </div>;

};

export default Cart;
