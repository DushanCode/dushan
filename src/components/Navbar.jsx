import React, { useState } from 'react'

import {logo1} from'../assets'
import{FaBars,FaTimes,FaGithub ,FaLinkedin, FaFacebook } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-100 '>
<div>
    <img src={logo1} alt='logo' style={{width:'50px'}}/>
</div>           
   <div className='hidden md:flex'>
    <ul className=' hidden md:flex gap-4'>
        <li> Home </li>
        <li> About </li>
        <li> Skills </li>
        <li> Works </li>
        <li> Contatc </li>
    </ul>

   </div>
                <div onClick={handleClick} className='md:hidden z-10'>
                   { !nav ?  <FaBars/> : <FaTimes/> }
                </div>
                                {/**  Mobile  */}
                <div className=' '>
                    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center' }>
                        <li className='py-6 text-4xl '> Home </li>
                        <li className='py-6 text-4xl '> About </li>
                        <li className='py-6 text-4xl '> Skills </li>
                        <li className='py-6 text-4xl '> Works </li>
                        <li className='py-6 text-4xl '>Contact</li>
                    </ul>


                </div>

                <div className=' flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <li> 
                            <a href=''> 
                            
                            <FaFacebook/>
                                  </a> 
                             </li>


                    </ul>


                </div>


    </div>
  )
}

export default Navbar