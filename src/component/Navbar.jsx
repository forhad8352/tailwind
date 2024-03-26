import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
       let [show, setShow] = useState(false) 
       let handleMenu = ()=> {
        setShow (!show)
       }
       

  return (
    <nav className='bg-[red] py-[30px]'>
        <div className="max-w-container mx-auto">
                <div className="flex justify-between">
                <div className="">
                <img src={Logo} alt="" />
                </div>
                <div className="">
                        <ul className={`lg:flex gap-8 absolute lg:static text-center z-50 ${show == true ?
                                'top-[200px] left-0 bg-[red] w-full duration-700'
                                :'top-[200px] left-[-100%] w-full duration-700'}`}>
                                <li className='lg:py-0 py-2'><a  className='text-white font-semibold font-popps text-[16px] 
                                 hover:text-black ' href="#">Home</a></li>
                                <li className='lg:py-0 py-2'><a  className='text-white font-semibold font-popps text-[16px] 
                                 hover:text-black ' href="#">About</a></li>
                                <li className='lg:py-0 py-2'><a  className='text-white font-semibold font-popps text-[16px] 
                                 hover:text-black ' href="#">Services</a></li>
                                <li className='lg:py-0 py-2'><a  className='text-white font-semibold font-popps text-[16px] 
                                 hover:text-black ' href="#">Gallery</a></li>
                                <li className='lg:py-0 py-2'><a  className='text-white font-semibold font-popps text-[16px] 
                                 hover:text-black ' href="#">Blog</a></li>
                                <li className='lg:py-0 py-2'><a  className='text-white font-semibold font-popps text-[16px]
                                border-2 px-6 py-[10px] rounded-[4px] lg:inline inline-block hover:bg-[#ffffffdc] hover:text-black transition duration-700 ease-in-out' href="#">Contact</a></li>
                        </ul>
                </div>
                <div className="lg:hidden" onClick={handleMenu}>
                        { show == true ? <RxCross1/>  : <FaBars/> }                      
                                              
                </div>
                </div>
        </div>
    </nav>
  )
  }

export default Navbar