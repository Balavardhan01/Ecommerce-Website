import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {

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
      <Navbar />

      {/* Filters */}
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

      {/* Products */}
      <div className="grid grid-cols-4 gap-10 p-5">
        {filteredMobiles.map(item => (
          <div key={item.id}>
            <Link to={`/mobiles/${item.id}`}>
              <img src={item.image} alt="" className="w-72 h-40 object-contain" />
            </Link>
            <div className="mt-2 text-center">
              {item.company}, {item.model}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MobilePage

