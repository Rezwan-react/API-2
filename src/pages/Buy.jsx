import React from 'react'
import { useSelector } from 'react-redux'



function Buy() {
 
  const data = useSelector((state)=> state. counter.value)
  
 
  const rate = data.Price*15/100

  
  return (
    <>
    
    <section>


    
        <div className="main w-[full] p-6 rounded-lg mt-24 bg-white shadow-xl gap-12 mb-2 flex">
       <div className="description mb-8">           
        <div className="text-3xl text-red-600 mt-4 font-bold">Price: {data.Price} </div>
        <div className="text-3xl text-red-600 mt-4 font-bold">VAT: {rate}  </div>
        <h4 className="text-blue-950 text-[16px] font-bold">Total Price : {data.Price+rate}  </h4>
        
       </div>
    </div>
           




      
       
          
          
        </section>

    
    </>
  )
}

export default Buy