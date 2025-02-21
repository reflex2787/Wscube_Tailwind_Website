import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
    return (
        <>
            <div className='bg-[#2699fb] w-full py-[100px] font-bold'>
                <div className='max-w-[1240px]my-[60px]'>
                    <div className='text-center text-[15px] md:text-[30px] md:mt-4'>
                        Learn with us.
                    </div>
                    <h1 className='text-center text-[30px] md:text-[55px] text-[white] md:mt-4'>Grow with us.</h1>
                    <div className='text-center text-[25px] md:text-[50px] text-[white] md:mt-4'>
                        Learn
                        <ReactTyped
                        className='pl-2'
                            startWhenVisible
                            strings={[
                                ' Web Development'
                            ]}
                            typeSpeed={500}
                            loop={true}
                            backSpeed={50}
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                    <button className='bg-black text-[white] py-3 px-10 rounded font-medium mt-10'>Get started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner