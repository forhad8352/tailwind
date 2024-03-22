import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin   } from "react-icons/fa";

const Header = () => {
  return (
  <header className='py-[8px] bg-hbg'>
        <div className='max-w-container mx-auto'>
    <div className="lg:flex">
    <div className="w-full sm:w-full lg:w-1/4">
        <div className=" flex items-center relative after:absolute after:top-0 after:right-[50px] after:content-[''] after:h-5 after:w-[2px] lg:after:bg-[#5C6A92] lg:justify-start justify-center">
            <CiMail className='text-white mr-2'/>    
        <p className='font-popps text-white'>mail@yourcompany.com</p>
        </div>
    </div>
    <div className="w-full sm:w-full lg:w-1/4 lg:py-0 py-2">
        <div className="flex items-center lg:justify-start justify-center">
            <IoCallOutline className='text-white mr-2'/>    
        <p className='font-popps text-white'>+896 120 5889 (Toll free)</p>
        </div>
    </div>
    <div className="w-full sm:w-full lg:w-1/2">
        <div className="flex lg:justify-end justify-center items-center h-full gap-x-6">
        <FaFacebookF className='text-white'/>
        <FaInstagram className='text-white'/>
        <FaTwitter className='text-white'/>
        <FaLinkedin className='text-white'/>
        </div>
    </div>
    </div>
    </div>
  </header>
  )
}

export default Header