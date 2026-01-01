import React from 'react'
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around   p-3 border-gray-800 items-center bg-cyan-700 border '>
       <div>
         <h2 className='text-3xl text-white'>E-Grab</h2>
       </div>

      <div className="relative w-full max-w-sm">
         <input
          type="text"
          placeholder="Search..."
          className="w-full bg-sky-100 rounded-xl outline-none pl-10 pr-3 py-2"
           />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>


       <div>
        <div>SignIn/SignUp</div>
        <div>Cart</div>
       </div>

      </div>

      <div className=' bg-gray-700 text-white '>
          <ul className='flex h-15 items-center'>
            <li className='m-5'>Mobiles</li>
            <li className='m-5'>Laptops</li>
            <li className='m-5'>Mens Fashion</li>
            <li className='m-5'>Watches</li>
            <li className='m-5'>Womans Fashion</li>
            <li className='m-5'>Tv's</li>
            <li className='m-5'>Kitchen</li>
            <li className='m-5'>Refrigerators</li>
            <li className='m-5'>Furniture</li>
            <li className='m-5'>AC</li>
            <li className='m-5'>Books</li>
          </ul>
        </div>
        </>
  )
}

export default Navbar
