import React from 'react'
import {computerData} from '../data/computers'

const Computers = () => {

    const firstFiveimg= computerData.slice(0,5)

  return (
    <>
    <div className='bg-cyan-200'>
    <h2 className='text-2xl'>Laptops</h2>

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

export default Computers
