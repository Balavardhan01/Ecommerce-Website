import React from 'react'
import {acData} from '../data/ac'
import Navbar from '../components/Navbar'

const AcPage = () => {
  return (
       <>

      <Navbar/>

      <div className=' grid grid-cols-4 gap-10 p-5'>
         {acData.map((item) => {
        return(
            <div className=''>
                <div><img src={item.image} alt="" className='w-300 h-70'/></div>
                <div className='flex items-center ml-23'>{item.company},{item.model}</div>
            </div>
        )
        }) }
       </div>
   </>
  )
}


export default AcPage
