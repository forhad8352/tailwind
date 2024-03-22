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
                        <ul className={`lg:flex gap-8 absolute lg:static text-center ${show == true ? 'top-[200px] left-0 bg-[green] w-full '
                                :'top-[200px] left-[-200px]' }`}>
                                <li><a  className='text-white font-semibold font-popps text-[16px]' href="#">Home</a></li>
                                <li><a  className='text-white font-semibold font-popps text-[16px]' href="#">About</a></li>
                                <li><a  className='text-white font-semibold font-popps text-[16px]' href="#">Services</a></li>
                                <li><a  className='text-white font-semibold font-popps text-[16px]' href="#">Gallery</a></li>
                                <li><a  className='text-white font-semibold font-popps text-[16px]' href="#">Blog</a></li>
                                <li><a  className='text-white font-semibold font-popps text-[16px]
                                border-2 px-6 py-[10px] rounded-[4px]' href="#">Contact</a></li>
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