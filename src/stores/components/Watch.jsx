import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
  const firstFiveimg =  watchData.slice(0,5);
 
  
   return (
     <>
 
     <h2 className='text-2xl '>Watches</h2>
 
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

export default Watch
