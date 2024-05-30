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
    <div className="cart-heading">
      <h1>Cart</h1>
    </div>
    <div className="cartItems">
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return <CartItem key={product._id} data={product} />
        }
      })}
      
      { totalAmount > 0 ? 
        <div className="checkout">
          <p className="cart-total"> Total amount: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button> Checkout </button>
        </div>
      : <div  className="checkout">
          <h3 className="cartEmpty"> Cart is empty</h3>
          <button onClick={() => navigate("/")}> View catalog </button>
        </div> }
    </div>
  </div>;

};

export default Cart;
