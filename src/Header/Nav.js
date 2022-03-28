import React, { useState } from 'react'
import Button from "./Button"
import {NavLink} from "react-router-dom"
import pix from "./1.png"

function Nav() {

  
    let [open,setOpen]=useState(false);
  return (
   <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-dwhite py-4 md:px-10 px-7 h-16'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 h-16 w-16 ml-10 ' >
       <img src={pix} className='w-edwdith h-edheight top-1'/>
      
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center mr-10 md:pb-0 pb-12 absolute md:static bg-dwhite md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        <NavLink to="/">
            <div className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer'  onClick={()=>setOpen(!open)}>
            <div className='text-navColor  text-base font-semibold hover:text-gray-400 duration-500'>Home</div>
        </div>
        </NavLink>
        <NavLink to="/about">
            <div className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer' onClick={()=>setOpen(!open)}>
            <div className='text-eds-color text-base font-semibold hover:text-gray-400 duration-500'>About</div>
        </div>
        </NavLink>
        <NavLink to="/about">
            <div className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer' onClick={()=>setOpen(!open)}>
            <div className='text-eds-color text-base font-semibold hover:text-gray-400 duration-500'>Login </div>
        </div>
        </NavLink>
        
        <Button>
          Sponsor
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav
