import React from 'react'
import {fridgeData} from '../data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const RefrigeratorPage = () => {
  return (
    <>

      <Navbar/>

      <div className=' grid grid-cols-4 gap-10 p-5'>
         {fridgeData.map((item) => {
        return(
             <div className=''>
               
                   <Link to={`/refrigerator/${item.id}`}> <div><img src={item.image} alt="" className='w-300 h-70'/></div>
                   </Link>

                <div className='flex items-center ml-23'>{item.brand},{item.model}</div>
            </div>
        )
        }) }
       </div>
   </>
  )
}

export default RefrigeratorPage
