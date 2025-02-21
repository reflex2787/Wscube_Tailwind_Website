import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";


function Headpart() {

  const [toggle ,setToggle]=useState(false)

  return (
    <div className='p-4 bg-[#2699fb]'>
      <div className='max-w-[1240px] border p-[12px] border-none mx-auto flex justify-between items-center'>
        <div className='text-3xl font-semibold'>
          Ws Cube Tech.
        </div>
        {
          toggle ?
          <HiMiniXMark  onClick={()=> setToggle(!toggle)} className='text-[white] text-[25px] md:hidden block'/>
          :
        <IoMenu onClick={()=> setToggle(!toggle)} className='text-[white] text-[25px] md:hidden block' />
        }
        <ul className='hidden md:flex gap-12 text-[white]'>
          <li>Home</li>
          <li>company</li>
          <li>resourse</li>
          <li>About</li>
          <li>Contant</li>
        </ul>
        {/* menu */}
        <ul className={`duration-300 md:hidden inline fixed bg-black left-0 top-[92px] left[-100%] w-screen h-screen text-[white] ${ toggle ? 'left-[0]' : 'left-[-100%]'}`}>
          <li className='p-5'>Home</li>
          <li className='p-5'>company</li>
          <li className='p-5'>resourse</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contant</li>
        </ul>
        {/* menu */}
      </div>
    </div>
  )
}

export default Headpart