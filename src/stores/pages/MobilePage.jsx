import React from 'react'
import {mobileData} from '../data/mobiles'
import Navbar from '../components/Navbar'

const MobilePage = () => {
  return (
   <>

      <Navbar/>

      <div className=' grid grid-cols-4 gap-10 '>
         {mobileData.map((item) => {
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

export default MobilePage
