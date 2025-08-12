import React, { useContext, useState } from 'react'
import './Card.css'
import { Summit } from '../../context/Summit'
import { useNavigate } from 'react-router-dom'
const Card = () => {

  const {cardItems,food_list,removeFromCard, getTotalCardAmount} = useContext(Summit)

 const navigate = useNavigate();

  return (
    <div className='Card'>
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
       
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
           if (cardItems[item._id] > 0) {
    return (
      <div>
        <div  className='card-items-title card-items-item'>
        <img src={item.image} alt="" />
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{cardItems[item._id]}</p>
        <p>${item.price*cardItems[item._id]}</p>
        <p onClick={()=>removeFromCard(item._id)} className='cross'>X</p>
      </div>
      <hr />
      </div>
    );
  }
  }  )}
      </div>
       <div className='card-bottum'>
        <div className='card-total'>
          <h2>Cart totals</h2>
          <div className="card-total-details">
            <p>Subtotal</p>
            <p>${getTotalCardAmount()}</p>
          </div>
          <hr />
          <div className="card-total-details">
             <p>Delivery fee</p>
            <p>${getTotalCardAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="card-total-details">
             <p>Total</p>
            <p>${getTotalCardAmount()===0?0:getTotalCardAmount()+2}</p>
          </div>
          <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
        </div>
          
       
       <div className="card-promocode">
        <div>
            <p>If you have a promo code , Enter it here</p>
         <div className='card-promocode-input'>
            <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>
        </div>
       </div>
       
       </div>
    </div>
  )
}

export default Card