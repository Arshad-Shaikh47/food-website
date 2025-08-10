import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import Placeorder from './pages/Placeorder/Placeorder'
import { Footer } from './componants/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}/>
         <Route
        path='/Card'
        element={<Card/>}/>
         <Route
        path='/Placeorder'
        element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
    
  )
}

export default App