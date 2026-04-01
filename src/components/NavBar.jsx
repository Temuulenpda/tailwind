import React from 'react'
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState(false);
  return (
    <div>
        <div className='bg-indigo-100 shadow-sm p-2 flex justify-between items-center '>
        <div className='flex items-center w-[100%] md:w-10 sm:justify-between'>
        <div className='font-bold text-indigo-700 text-3xl'>EduSmart</div>
         <div className='md:hidden '> {activeLink ? (<HiX onClick={() => setActiveLink(!activeLink)}  className="w-8 h-8 "/>) : (
                <HiMenu onClick={() => setActiveLink(!activeLink)} className="w-8 h-8 " />)}</div>
        </div>
        <div className=" hidden md:block ">
          <div className='flex gap-3'> 
             <a href="#">home</a>
            <a href="#">Courses</a>
            <a href="#">Teachers</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
         <div className='flex gap-4'>
            <button className='w-25 h-10  rounded-xl bg-white hidden md:block'>Sign Up</button>
            <button className='bg-indigo-700 h-10 w-25 rounded-xl text-white hidden md:block'>Login</button>
        </div>
     </div>
     {activeLink && (
            <div className='md:hidden p-2 bg-indigo-100 shadow-sm wh-100'>
             <div className="flex flex-col gap-3 md:block">
        <a href="#">home</a>
        <a href="#">Courses</a>
        <a href="#">Teachers</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
            </div>  
        </div>
        )}
    </div>
  )
}

export default NavBar