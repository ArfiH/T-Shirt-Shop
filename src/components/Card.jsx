import React, { useContext } from "react";
import {HomeContext} from '../context/HomeContext'
import './Card.css'
import Star from './Star'

const Card = ({product}) => {
  const { addToCart, cartItems}  = useContext(HomeContext);
  const cartItemAmount = cartItems[product.id];
  
  return (
    <section className="card">
      <img className="card-img" src={product.img} alt={product.title} />
      <div className="card-details">
        <h3 className="card-title">{product.title}</h3>
        <section className="card-reviews">
          
          <Star star = {product.star} />
          
          <span className="total-reviews">{product.reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{product.prevPrice}</del> ${product.newPrice}
          </div>
          { product.available > 0 ?
            (
            <div className="bag">
              <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
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
