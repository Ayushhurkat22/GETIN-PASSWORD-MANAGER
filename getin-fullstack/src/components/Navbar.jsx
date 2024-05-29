/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white sticky'>

      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          Get
          <span className='text-green-500'>In/&gt;</span>
        </div>

        <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/"> Home </a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul>
        
        <button className='text-white my-5 rounded-md flex fap-4'>
          <img className='invert w-10 p-1' src="icons/Github.png" alt="github logo" />
          <span className='font-bold'>Github</span>
        </button>

      </div>

    </nav>
  )
}

export default Navbar
