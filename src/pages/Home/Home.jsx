import React, { useState } from 'react'
import './Home.css'
import Header from '../../componants/Header/Header'
import Exploremenu from '../../componants/exploremenu/Exploremenu'
import Fooddisplay from '../../componants/Food-disply/Fooddisplay'
import { Appdownload } from '../../componants/Appdownload/Appdownload'



   const Home = () => {
  const [category,setcategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory} />
       <Fooddisplay category={category}/>
       <Appdownload/>
    </div>
  )
}

export default Home