import React from 'react'
import Navbar from '../components/Navbar'
import {computerData} from '../data/computers'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LaptopPage = () => {

  const [selectedProduct, setSelectedProduct] = useState([])
  
    const companyHandler = (company) => {
      if (selectedProduct.includes(company)) {
        setSelectedProduct(selectedProduct.filter(item => item !== company))
      } else {
        setSelectedProduct([...selectedProduct, company])
      }
    }
  
    const companies = [...new Set(mobileData.map(item => item.company))]
  
    const filteredMobiles =
      selectedProduct.length === 0
        ? mobileData
        : mobileData.filter(item =>
            selectedProduct.includes(item.company)
          )
  return (
   <>

      <Navbar/>

       <div className="p-5">
        {companies.map(company => (
          <label key={company} className="block">
            <input
              type="checkbox"
              checked={selectedProduct.includes(company)}
              onChange={() => companyHandler(company)}
            />
            <span className="ml-2">{company}</span>
          </label>
        ))}
      </div>

      <div className=' grid grid-cols-4 gap-10 p-5'>
         {computerData.map((item) => {
        return(
            <div className=''>
               
                   <Link to={`/laptops/${item.id}`}> <div><img src={item.image} alt="" className='w-300 h-70'/></div>
                   </Link>

                <div className='flex items-center ml-23'>{item.company},{item.model}</div>
            </div>
        )
        }) }
       </div>
   </>
  )
}
export default LaptopPage
