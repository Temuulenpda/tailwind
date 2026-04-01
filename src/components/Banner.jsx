import React, { useState } from 'react'
import Bannerimage from "../assets/Banner.png"

const Banner = () => {
  return (
    <div className='w-full md:flex-row flex sm:flex-col py-8 px-4'>
           <div className='sm:w-full md:w-1/2 '>
             <div className='flex items-center gap-2  p-4'>
               <span className='text-indigo-600 font-semibold'>Start learning today</span>
           </div>
           <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
               Improve your skills with online courses
           </h1>
           <p className='text-gray-600 text-lg md:text-xl mt-8 w-2/3'>
               Learn programming,design and teamwork with simple projects and clear lesson for beginners.
           </p>
           <div className='mt:8 p-4 flex gap-4 w-2/3'>
               <button className='bg-indigo-600  text-white px-8 py-4 rounded-xl'>
                    Get started
               </button>
                <button className='bg-gray-100  px-8 py-4 rounded-xl'>
                    View courses
               </button>
           </div>
           </div>
         
           <div className='sm:w-full md:w-1/2 flex justify-center  items-center '>
               <img src={Bannerimage} alt="" className='w-5/6' />
               
           </div>
   
       </div>
  )
}

export default Banner