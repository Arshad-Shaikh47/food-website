import React, { useState } from 'react'
import Navbar from './componants/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import { Footer } from './componants/Footer/Footer'
import Loginpopup from './componants/loginpopup/Loginpopup'
import Placeorder from './pages/Placeorder/Placeorder'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}/>
         <Route
        path='/Card'
        element={<Card/>}/>
         <Route
        path='/Order'
        element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
    
  )
}

export default App