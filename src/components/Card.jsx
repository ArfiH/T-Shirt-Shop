import React, { useContext } from "react";
import {HomeContext} from '../context/HomeContext'
import './Card.css'
import { products } from "../database/data";
import Star from './Star'

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice, purchased, available }) => {
  const { addToCart, removeFromCart, cartItems}  = useContext(HomeContext);
  const cartItemAmount = cartItems[id];
  
  return (
    <section className="card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          
          <Star star = {star} />
          
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          { available > 0 ?
            (
            <div className="bag">
              <button className="addToCartBttn" onClick={() => addToCart(id)}>
                <span className="addToCartText">Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>} </span>
              </button>
                
            </div>
            )
            : (
            <div className="out-of-stock"> Out of stock </div>
            )
          }
          
        </section>
      </div>
    </section>
  );
};

export default Card;
