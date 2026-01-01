import React from 'react'
import {menData} from '../data/men'

const Men = () => {
  const firstFiveimg =  menData.slice(0,5);
 
  
   return (
     <>
     <div className='bg-cyan-200'>
     <h2 className='text-2xl '>Men's Fashion</h2>
 
      <div className='flex bg-white'>
       {
         firstFiveimg.map((item) => {
            return(
             <div className='w-[80%] ml-4'>
                 <img src={item.image} alt="" className='w-[80%]' />
             </div>
            
            )
            
         })
       }
     </div>
     </div>
     </>
   )
 }

export default Men
