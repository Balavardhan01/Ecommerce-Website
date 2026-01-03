import React from 'react'
import {computerData } from "../stores/data/computers";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";

const LaptopSingle = () => {
 const { id } = useParams();
  const product = computerData.find((item) => item.id === id);
  console.log(id);

  return (
  <>
    <Navbar/>

     <div className="flex flex-row  bg-pink-100 h-screen">
      <div className=" mt-10">
        <img src={product.image} alt="" />
        
      </div>

      <div className="p-20">
        <div>
            <h2 className="text-xl">{product.company}</h2>
        </div>

        <div>
        <h3>{product.model}</h3>
      </div>

      <div className="mt-3">
        <h4>{product.price}</h4>
      </div>

      <div className="mt-3">
        <p>{product.description}</p>
      </div>

      <button  className="bg-yellow-400 p-2 rounded-xl text-white cursor-pointer scale-95 hover:bg-amber-300 mt-5">Add to cart</button>
      </div>
      
    </div>
  </>
  );
};

export default LaptopSingle
