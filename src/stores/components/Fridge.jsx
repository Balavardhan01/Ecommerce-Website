import React from 'react'
import {fridgeData} from '../data/fridge'

const Fridge = () => {
   const firstFiveimg = fridgeData.slice(0,5);
  
   
    return (
      <>
  
      <h2 className='text-2xl '>Refrigerators</h2>
  
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

export default Fridge
