
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productData } from '../slices/ProductSlice'

function Services() {

const [product , setproduct] = useState ([])
const navigate = useNavigate()
const dispatch = useDispatch()
useEffect(()=>{
  axios. get('https://api.jsonbin.io/v3/b/6675971ce41b4d34e406c36e')
  .then((res) => setproduct(res.data.record))
},[])


const handelShow = (tata)=>{
  navigate('/data')
  dispatch(productData(tata))
}

const handleBuy = (item)=>{
  navigate('/Buy')
  dispatch(productData(item))
}
// const handleBuy = (item)=>{
//   ma ('/Buy')
  
// }

  return (
  
    <>
  
  <div className="main flex justify-center  flex-wrap gap-4">
    <div className="Product flex justify-center flex-wrap gap-3">
    {
      product.map((item, i)=>(
        
        <div key={i} className="singleProduct w-[300px] p-3 shadow-xl bg-[#83B4FF] mt-11 rounded-md flex justify-center flex-col hover:shadow-2xl hover:bg-[#A7E6FF]">
           <div className="singleProductImg w-[250px]  p-3 bg-white shadow-md ml-3">
            <img src= {item.Photo} alt="img" />
           </div>
           <div className="content">
             <ol>
               <li className="mt-3 mb-4 text-xl text-black font-bold ">{item. Laptop_name}</li>
               <li className="mt-1 text-sm text-black font-normal">Model : {item.Model}</li>
               <li className="mt-1 text-sm text-black font-normal">Processor : {item.Processor}</li>
               <li className="mt-1 text-sm text-black font-normal">RAM : {item.RAM}</li>
               <li className="mt-1 text-sm text-black font-normal">Display : {item.Display}</li>
               <li className="mt-1 text-sm text-black font-semibold">Price : {item.Price}</li>
             </ol>
             <button onClick={ ()=> handelShow(item)} className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-[#5C2FC2] ml-6 mt-3 hover:bg-white hover:text-black active:text-white active:bg-[#5C2FC2]">Show More</button>
             <br />
             <br />
             <button onClick={ ()=>handleBuy(item)} className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-blue-900 ml-6 mb-4 hover:bg-white hover:text-black active:text-white active:bg-blue-900">Order</button>
           </div>
        </div>
     
      ))
    }
    </div>
    </div>
    </>
  
  )
}

export default Services