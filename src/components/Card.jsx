import React, { useContext } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import {HomeContext} from '../context/HomeContext'


const Card = ({ id, img, title, star, reviews, prevPrice, newPrice }) => {
  const { addToCart}  = useContext(HomeContext);
  
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
              <BsFillBagPlusFill className="bag-icon" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
