import React from 'react'
import Logg from "../assets/Logo1.png"
import Loggg from "../assets/Logo2.png"
import Logggg from "../assets/Logo3.png"
import Loggggg from "../assets/Logo4.png"

const Logo = () => {
  return (
<div className="bg-[white] my-[40px]">
<div className="max-w-container mx-auto flex flex-wrap justify-between">
        <div className="w-1/4">
        <img src={Logg} alt=""/>
        </div>
        <div className="w-1/4">
        <img src={Loggg} alt=""/>
        </div>
        <div className="w-1/4">
        <img src={Logggg} alt=""/>
        </div>
        <div className="w-1/4">
        <img src={Loggggg} alt="" />
        </div>
    </div>
</div>
  )
}

export default Logo