import React from 'react'
import {furnitureData} from '../data/furniture'

const Furniture = () => {
  const firstFiveimg =  furnitureData.slice(0,5);
 
  
   return (
     <>
 
     <h2 className='text-2xl '>Furniture</h2>
 
      <div className='flex '>
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
     </>
   )
 }

export default Furniture
