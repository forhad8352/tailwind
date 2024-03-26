import React from 'react'
import Gal from '../assets/college1.png'
import Gall from '../assets/college2.png'
import Galll from '../assets/college3.png'
import Gallll from '../assets/college4.png'

const Gallery = () => {
  return (
   <div className="flex flex-wrap justify-between">
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
        <img src={Gal} alt="" className='w-full'/>
    </div>
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
        <img src={Gall} alt="" className='w-full'/>
    </div>
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
        <img src={Galll} alt="" className='w-full'/>
    </div> 
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
        <img src={Gallll} alt="college4" className='w-full'/>
    </div>
   </div>
  )
}

export default Gallery