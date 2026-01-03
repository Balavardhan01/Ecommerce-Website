import React from 'react'
import {menData} from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MensFashionPage = () => {
  return (
     <>

      <Navbar/>

      <div className=' grid grid-cols-4 gap-10 p-5'>
         {menData.map((item) => {
        return(
            <div className=''>
               
                   <Link to={`/mensfashion/${item.id}`}> <div><img src={item.image} alt="" className='w-300 h-70'/></div>
                   </Link>

                <div className='flex items-center ml-23'>{item.brand},{item.model}</div>
            </div>
        )
        }) }
       </div>
   </>
  )
}
export default MensFashionPage
