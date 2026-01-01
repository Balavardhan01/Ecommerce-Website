import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around mb-1  p-3 border-gray-800 items-center bg-cyan-600 border '>
       <div>
         <h2 className='text-3xl text-white'>E-Grab</h2>
       </div>

       <div>
        <input className='bg-sky-100 rounded-xl outline-0 px-3 py-2' type="text"  placeholder='  Search..' />
       </div>

       <div>
        <div>SignIn/SignUp</div>
        <div>Cart</div>
       </div>

      </div>

      <div>
          <ul>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Mens Fashion</li>
            <li>Watches</li>
            <li>Womans Fashion</li>
            <li>Tv's</li>
            <li>Kitchen</li>
            <li>Refrigerators</li>
            <li>Furniture</li>
            <li>AC</li>
            <li>Books</li>
          </ul>
        </div>
        </>
  )
}

export default Navbar
