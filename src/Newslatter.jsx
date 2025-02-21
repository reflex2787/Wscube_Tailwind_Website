import React from 'react'

function Newslatter() {
  return (
    <>
   <div className='w-full bg-[#2699fb]'>
   <div className='max-w-[1240px] m-auto md:flex justify-between p-10'>
        <div className='py-10'>
            <span className='text-[white] font-semibold md:text-[30px] text-[25px]'>Want to learn latest I.I skills ?</span>
            <p className='text-[white]'> sign in  to our  newsletter and  up to  date.</p>
        </div>
        <div className='py-10'>
            <div className='md:flex'>
                <input className='outline-none rounded   w-[55%] h-12 m-2 p-1' type="text" placeholder='Email enter please .....' />
                <button className='rounded bg-black m-2 text-[white] py-3 px-5 rounded font-medium'>Get started</button>
            </div>
            <p className='text-[white] mx-2' >We care bout the  protection of your date .Read our</p>
            <p className='text-black mx-2'>privacy policy.</p>
        </div>
    </div>
   </div>
    </>
  )
}

export default Newslatter