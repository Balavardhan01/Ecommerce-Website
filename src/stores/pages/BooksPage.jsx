import React from 'react'
import {booksData} from '../data/books'
import Navbar from '../components/Navbar'

const BooksPage = () => {
  return (
     <>

      <Navbar/>

      <div className=' grid grid-cols-4 gap-10 p-5'>
         {booksData.map((item) => {
        return(
            <div className=''>
                <div><img src={item.image} alt="" className='w-300 h-70'/></div>
                <div className='flex items-center ml-23'>{item.title},{item.author}</div>
            </div>
        )
        }) }
       </div>
   </>
  )
}

export default BooksPage
