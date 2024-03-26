import React from 'react'

const Area = () => {
  return (
    <div className='bg-[red]'>
        <div className="max-w-container lg:mx-auto lg:py-8 max-[375px]:py-4 max-[667px]:py-6">
                <div className="lg:flex lg:justify-between items-center ">
                <div className="">
                        <h3 className='text-white text-[15px] lg:text-[36px] max-[667px]:text-center font-popps font-bold '>Want to join as member branch in your area?</h3>
                </div>
                <div className="lg:ml-[150px] max-[375px]:ml-[120px] max-[667px]:ml-[270px] max-[414px]:ml-[140px]">
                        <button className='text-white font-semibold font-popps text-[16px]
                        border-2 px-6 py-[10px] rounded-[4px] lg:inline inline-block hover:bg-[#ffffffdc]
                         hover:text-black transition duration-700 ease-in-out '>Contact</button>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default Area