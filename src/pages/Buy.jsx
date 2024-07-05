import React from 'react'

function Buy() {
  return (
    <>
    
    <section>
        <div className='bg-gray-600 flex justify-center items-center min-h-[100vh]'>
        <div className=' w-[308px] [h-500px] border-[3px] border-rose-500 shadow-[inset_0px_20px_20px_10px_#742a2a]'>
        
              <div className="form_col ">
                <div className=' flex justify-center'>
                    <h2 className='text-2xl font-bold'>Account Login</h2>
                </div>
                <form >
                  
                  <div className="form_group">
                    <label className="email text-xl text-black font-medium">Email</label> <br/>
                    <input  className='pl-3 w-[300px] h-[33px] border-[3px] border-[#000]' type="email" placeholder='Enter your email' />
                  
                  </div>
                  <div className="form_group">
                    <label className="password text-xl text-black font-medium">Password</label> <br/>
                    <input  className='pl-3 w-[300px] h-[33px] border-[3px] border-[#000]' type="password" placeholder='Enter your password '/>
                    
                  </div>
                  <div className="form_group">
                    <button className='text-xl text-black font-medium' type="submit">Submit</button>
                    </div>        
                </form>
              </div>
            
        </div>
        </div>
          
          
        </section>

    
    </>
  )
}

export default Buy