import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around border-gray-800 items-center bg-cyan-600 border '>
       <div>
         <h2 className='text-3xl text-white'>E-Grab</h2>
       </div>

       <div>
        <input className='bg-sky-100 rounded-xl outline-0' type="text"  placeholder='  Search..' />
       </div>

       <div>
        <div>SignIn/SignUp</div>
        <div>Cart</div>
       </div>
    </div>
  )
}

export default Navbar
