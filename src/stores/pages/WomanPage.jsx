import React from 'react'
import {womanData} from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const WomanPage = () => {

  const [selectedProduct, setSelectedProduct] = useState([])
  
    const companyHandler = (company) => {
      if (selectedProduct.includes(company)) {
        setSelectedProduct(selectedProduct.filter(item => item !== company))
      } else {
        setSelectedProduct([...selectedProduct, company])
      }
    }
  
    const companies = [...new Set(womanData.map(item => item.company))]
  
    const filteredWomen =
      selectedProduct.length === 0
        ? womanData
        : womanData.filter(item =>
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

      <div className="grid grid-cols-4 gap-10 p-5">
             {filteredWomen.map(item => (
               <div key={item.id}>
                 <Link to={`/womenfashion/${item.id}`}>
                   <img src={item.image} alt="" className="w-72 h-40 object-contain" />
                 </Link>
                 <div className="mt-2 text-center">
                   {item.brand}, {item.model}
                 </div>
               </div>
             ))}
           </div>
   </>
  )
}

export default WomanPage
