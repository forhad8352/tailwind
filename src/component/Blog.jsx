import React from 'react'
import Blogg from "../assets/Blog1.png"
import Bloggg from "../assets/Blog2.png"
import Blogggg from "../assets/Blog3.png"

const Blog = () => {
  return (
    <div className='bg-[#C4C4C4] pt-[92px] pb-[108px]'>
        <div className="max-w-container mx-auto lg:flex justify-center lg:gap-x-8">
           
               <div className="lg:w-[32%]">
                        <div className="relative z-10 after:absolute after:top-0 after:left-0 after:content [''] after:bg-[#22222294] after:h-full after:w-full ">
                        <img src={Blogg} alt="" className='w-full'/>
                        <div className="absolute top-[120px] left-[50px] lg:left-[80px] lg:w-[50%] z-10">
                        <h4 className='text-[#FFFFFF] text-[24px] font-bold font-popps pb-[52px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, reiciendis!</h4>
                        <button className='bg-[#ffffff] text-[14px] lg:text-[16px] font-popps py-[8px] px-[20px] lg:py-[10px] lg:px-[22px]
                                font-semibold text-[red]  sm:ml-0 lg:ml-0 hover:bg-[#F40404] hover:text-black duration-700'>Read more</button>
                        </div>
                        </div>       
                </div>
               <div className="lg:w-[32%]">
                        <div className="relative z-10 after:absolute after:top-0 after:left-0 after:content [''] after:bg-[#22222294] after:h-full after:w-full ">
                        <img src={Bloggg} alt="" className='w-full'/>
                        <div className="absolute top-[120px] left-[50px] lg:left-[80px] lg:w-[50%] z-10">
                        <h4 className='text-[#FFFFFF] text-[24px] font-bold font-popps pb-[52px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, reiciendis!</h4>
                        <button className='bg-[#ffffff] text-[14px] lg:text-[16px] font-popps py-[8px] px-[20px] lg:py-[10px] lg:px-[22px]
                                font-semibold text-[red]  sm:ml-0 lg:ml-0 hover:bg-[#F40404] hover:text-black duration-700'>Read more</button>
                        </div>
                        </div>       
                </div>
               <div className="lg:w-[32%]">
                        <div className="relative z-10 after:absolute after:top-0 after:left-0 after:content [''] after:bg-[#22222294] after:h-full after:w-full ">
                        <img src={Blogggg} alt="" className='w-full'/>
                        <div className="absolute top-[120px] left-[50px] lg:left-[80px] lg:w-[50%] z-10">
                        <h4 className='text-[#FFFFFF] text-[24px] font-bold font-popps pb-[52px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, reiciendis!</h4>
                        <button className='bg-[#ffffff] text-[14px] lg:text-[16px] font-popps py-[8px] px-[20px] lg:py-[10px] lg:px-[22px]
                                font-semibold text-[red]  sm:ml-0 lg:ml-0 hover:bg-[#F40404] hover:text-black duration-700'>Read more</button>
                        </div>
                        </div>       
                </div>
              
        </div>
    </div>
  )
}

export default Blog