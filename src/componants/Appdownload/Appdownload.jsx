import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
export const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For better Experience Download <br />Tomato App</p>
      <div className="appdownload-platforms">
        <img src={assets.play_store} alt="" />
         <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
