import React from 'react'

function Card() {
  return (
    <>
    <div className='max-w-[1240px] m-auto my-20  md:grid grid-cols-3 gap-10'>
        <div className='shadow-2xl h-[500px] flex flex-col justify-center items-center m-4 rounded-lg hover:scale-105 duration-[300ms] '>
            <img src="src/assets/img/single.png" className='w-[50px] mx-auto ' alt="" />
            <div className='font-bold my-6 mx-[30%]'>
            <p>Web Development</p>
            </div>
            <span className='font-bold text-[30px]'>$ 149</span>
            <p className='text-center font-semibold my-4 leading-8'>Lorem ipsum, dolor sit <br /> amet consectetur adipisicing. Debitis, nulla <br /> magni qui <br />inventore nihil magnam?</p>
            <button className='text-black my-2 bg-green-500 py-3 px-10 rounded font-medium'>Get started</button>
        </div>
        <div className='shadow-2xl h-[500px] flex flex-col bg-gray-100 justify-center items-center m-4 rounded-lg hover:scale-105 duration-[300ms] '>
            <img src="src/assets/img/double.png" className='w-[80px] mx-auto ' alt="" />
            <div className='font-bold my-6 mx-[30%]'>
            <p>Digital Marketing</p>
            </div>
            <span className='font-bold text-[30px]'>$ 149</span>
            <p className='text-center font-semibold my-4 leading-8'>Lorem ipsum, dolor sit <br /> amet consectetur adipisicing. Debitis, nulla <br /> magni qui <br />inventore nihil magnam?</p>
            <button className='text-green-500 my-2 bg-black py-3 px-10 rounded font-medium'>Get started</button>
        </div>
        <div className='shadow-2xl h-[500px] flex flex-col justify-center  items-center m-4 rounded-lg hover:scale-105 duration-[300ms] '>
            <img src="src/assets/img/triple.png" className='w-[50px] mx-auto ' alt="" />
            <div className='font-bold my-6 mx-[30%]'>
            <p>App Development</p>
            </div>
            <span className='font-bold text-[30px]'>$ 149</span>
            <p className='text-center font-semibold my-4 leading-8'>Lorem ipsum, dolor sit <br /> amet consectetur adipisicing. Debitis, nulla <br /> magni qui <br />inventore nihil magnam?</p>
            <button className='text-black my-2 bg-green-500 py-3 px-10 rounded font-medium'>Get started</button>
        </div>
    </div>
    </>
  )
}

export default Card