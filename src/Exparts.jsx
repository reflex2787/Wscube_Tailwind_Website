import React from 'react'

function Exparts() {
  return (
    <>
      <div className='max-w-[1240px] my-16 mx-auto md:grid grid-cols-3 p-2'>
        <div className='col-span-1 h-[100%]'>
          <img src="src/assets/img/laptop.jpg" alt="" />
        </div>
        <div className='col-span-2 flex flex-col justify-center h-[100%] p-4'>
          <span className='text-[aqua] my-4'>LEARN FROM EXPERTS</span>
          <p className='my-2 md:text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit obcaecati facere corrupti voluptate, fugit cupiditate ullam, odit aliquid enim nemo magni perferendis, aut natus vel odio asperiores accusantium laboriosam eveniet?</p>
          <div>
            <button className='bg-black my-2 text-[white] py-3 px-10 rounded font-medium'>Get started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exparts