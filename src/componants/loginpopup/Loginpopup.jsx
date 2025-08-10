import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='loginpopup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' />}
            
            <input type="email" placeholder='Your email' required />
            <input type="passward" placeholder='Passward' required />
        </div>
        <button>{currState==="Sing up"?"create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By condition, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ? <p>Create a new account? <span onClick={()=>setCurrState("Sing up")}>click here</span></p>
        : <p>Already have an account <span onClick={()=>setCurrState("Longin")}>Login here</span></p>
           
        }
       
       </form>
    </div>
  )
}

export default Loginpopup