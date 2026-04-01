import React from 'react'
const Footer = () => {
  return (
    <div>
      <div className='w-full bg-indigo-700 py-4 px-8 text-white flex flex-col md:flex-row justify-center mx-auto items-center'>
        <div className='w-1/2 gap-10 flex sm:mb-8'>
           <div>
             <h1 className='text-4xl font-bold'>EduSmart</h1>
             <p>Learn simply.Build confidently</p>
           </div>
        </div>
        <div className='flex gap-8 text-lg'>
            <h2>About us</h2>
            <h2>Courses</h2>
            <h2>Blog</h2>
            <h2>Help Center</h2>
            <h2>Privacy Policy</h2>
        </div>
        
    </div>
    <h2>@copy 2026 Temuulen</h2>
    </div>
  )
}

export default Footer