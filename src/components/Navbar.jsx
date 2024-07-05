import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className=' bg-[#FFFED3] py-6'>
            <ul className='flex justify-around'>
                <li><Link className='text-xl font-semibold text-black' to ='/'>Home</Link></li>
                <li><Link className='text-xl font-semibold text-black' to ='/about'>About</Link></li>
                <li><Link className='text-xl font-semibold text-black' to ='/services'>Services</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar