import React from 'react'
import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
  const firstFiveimg =  kitchenData.slice(0,5);
 
  
   return (
     <>
     <div className='bg-cyan-200'>
     <h2 className='text-2xl '>Kitchen</h2>
 
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

export default Kitchen
