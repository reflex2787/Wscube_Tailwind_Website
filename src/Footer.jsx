import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='w-[100%] py-4 bg-[rgb(38,153,251)]'>
      <div className='max-w-[1240px] my-4 m-auto md:flex justify-evenly' >
        <div className=' m-2 sm:mx-auto'>
          <p className='text-[25px] font-semibold m-2'>Ws Cube Tech .</p>
          <p className='m-2 text-[white]'>Lorem ipsum dolor sit amet consectetuio! Laboriosam <br /> error ratione autem asperiores iusto! Minus, <br /> minima voluptas?</p>
          <div className='text-[25px] flex gap-12  m-2 my-6 text-[white]'>
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitterSquare /><FaSquareGithub />
          </div>
        </div>
       <div className='sm:flex'>
       <div className='m-2'>
          <ul>
            <li className='text-black text-[18px] m-2'>Solution</li>
            <li className='text-[white] text-[15px] m-2'>Anlytics</li>
            <li className='text-[white] text-[15px] m-2'>Marketing</li>
            <li className='text-[white] text-[15px] m-2'>Commerce</li>
            <li className='text-[white] text-[15px] m-2'>Insights</li>
          </ul>
        </div>
        <div className='m-2'>
        <ul>
            <li className='text-black text-[18px] m-2'>Support</li>
            <li className='text-[white] text-[15px] m-2'>Pricing</li>
            <li className='text-[white] text-[15px] m-2'>Documentation</li>
            <li className='text-[white] text-[15px] m-2'>Guides</li>
            <li className='text-[white] text-[15px] m-2'>API Status</li>
          </ul>
        </div>
        <div className='m-2'>
        <ul>
            <li className='text-black text-[18px] m-2'>Company</li>
            <li className='text-[white]  text-[15px] m-2'>About</li>
            <li className='text-[white]  text-[15px] m-2'>Blog</li>
            <li className='text-[white]  text-[15px] m-2'>Jobs</li>
            <li className='text-[white]  text-[15px] m-2'>Press</li>
            <li className='text-[white]  text-[15px] m-2'>Careers</li>
          </ul>
        </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Footer