import React from 'react'
import {furnitureData} from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FurniturePage = () => {
  return (
     <>

      <Navbar/>

      <div className=' grid grid-cols-4 gap-10 p-5'>
         {furnitureData.map((item) => {
        return(
            <div className=''>
               
                   <Link to={`/furniture/${item.id}`}> <div><img src={item.image} alt="" className='w-300 h-70'/></div>
                   </Link>

                <div className='flex items-center ml-23'>{item.brand},{item.model}</div>
            </div>
        )
        }) }
       </div>
   </>
  )
}

export default FurniturePage
