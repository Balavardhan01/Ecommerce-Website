import React from 'react'
import {womanData} from '../data/woman'

const Woman = () => {
  const firstFiveimg =  womanData.slice(0,5);
 
  
   return (
     <>
 
     <h2 className='text-2xl '>Woman's Fashion</h2>
 
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

export default Woman
