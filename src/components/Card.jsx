import React, { useContext } from "react";
import {HomeContext} from '../context/HomeContext'
import './Card.css'
import { products } from "../database/data";


const Card = ({ id, img, title, star, reviews, prevPrice, newPrice, purchased, available }) => {
  const { addToCart, removeFromCart, cartItems}  = useContext(HomeContext);
  const cartItemAmount = cartItems[id];
  
  return (
    <section className="card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <div className="bag">
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              <span className="addToCartText">Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>} </span>
            </button>
              { (products[id - 1].purchased === products[id - 1].available) ? <div className="out-of-stock"> Out of stock </div> : <span></span> }
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
