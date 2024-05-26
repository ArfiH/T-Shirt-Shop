import React from 'react'
import { BsFillBagPlusFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
        <img className='card-img' src={img}  alt={title} />
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
            {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className='card-price'>
            <div className="price">
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagPlusFill className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card