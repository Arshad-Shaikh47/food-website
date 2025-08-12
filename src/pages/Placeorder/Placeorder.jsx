import React, { useContext } from 'react'
import './Placeorder.css'
import { Summit } from '../../context/Summit'
const Placeorder = () => {

  const {getTotalCardAmount} = useContext(Summit)

  return (
    <div className='Placeorder'>
      <div className="place-order-left">
         <p className='title'>Delivery Information</p>  
         <div className="multi-fields">
          <input type="text" placeholder='first Name'/>
          <input type="text"  placeholder='last Name'/>
         </div>
           <input type="email" placeholder='Email address'/>
           <input type="text" placeholder='Street'/>
           <div className="multi-fields">
          <input type="text" placeholder='city'/>
          <input type="text"  placeholder='state'/>
         </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text"  placeholder='Country'/>
         </div>
         <input type="text" placeholder='Phone'  />
      </div>
      <div className="place-order-right">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default Placeorder