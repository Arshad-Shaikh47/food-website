import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <img src={assets.header_img} alt="" />
       <div className='header-contents'>
        <h2>Order your favourite here </h2>
        <p>choose from a diverse menu fuaturing a delectable arry  of dishes. Our mission is to satisfy your cravings and elevate your dining experience . One delicious meal at a time. </p>
        <button>View menu</button>
       </div>
    </div>
  )
}

export default Header