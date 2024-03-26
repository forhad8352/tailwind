import React from 'react'
import Com from "../assets/company.png"

const Company = () => {
  return (
<div className='bg-[#aca9a9] lg:mt-[136px]'>
  <div className="max-w-container mx-auto lg:py-[130px]">
    <div className="lg:flex">
      <div className="lg:w-1/3 w-[100%] pt-5 lg:pt-0">
        <div className="bg-[#F40404] lg:w-full lg:h-full py-[20px] lg:pt-[120px] lg:px-[60px]">
        <h4 className='text-white font-popps font-bold lg:text-[36px] text-center'>Learn more about our company</h4>
        </div>
      </div>
      <div className="lg:w-2/3">
       <div className="bg-[url('../src/assets/company.png')] bg-cover bg-no-repeat bg-center lg:pt-[168px] pt-[100px] pb-[110px] lg:pb-[170px] text-center">
        <a href="#" className='class="text-[16px] text-[#F40404] font-pops  font-semibold  py-[14px] px-[30px] bg-[#FFFFFF]'>Read More</a>
       </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Company