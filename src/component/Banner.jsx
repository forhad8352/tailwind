import React from 'react'

const Banner = () => {
  return (
   <div className="bg-[url('../src/assets/banner.png')] bg-no-repeat bg-center bg-cover py-[41px] lg:py-[320px] relative
   z-10 after:absolute after:top-0 after:left-0 after:content-['']
   after:bg-[#22222294] after:h-full after:w-full after:-z-10">
    <div className='max-w-container mx-auto'>
        <h2 className='text-white font-popps text-[14px] lg:text-[64px] font-bold lg:leading-[90px] lg:w-[842px]'>
                We exist since 1975 on the oil and gas industry.</h2>
        <button className='bg-[#F40404] text-[14px] lg:text-[16px] font-popps py-[8px] px-[20px] lg:py-[14px] lg:px-[41px]
         font-semibold text-white mt-6 ml-[120px] sm:ml-0 lg:ml-0 hover:bg-[#ffffffdc] hover:text-black duration-700'>LEARN MORE</button>
    </div>
   </div>
  )
}

export default Banner