import React from 'react'
import { footerLinks } from './Dasgal8data/data'
footerLinks
const Footer = () => {
  return (
    <div id='Contact'>
      <div className='w-full bg-orange-500 py-4 px-8 text-white flex flex-col md:flex-row justify-center mx-auto items-center'>
        <div className='w-1/2 gap-10 flex sm:mb-8'>
           <div>
             <h1 className='text-4xl font-bold text-white'>Foodhouse</h1>
           </div>
        </div>
        <div className='flex gap-8 text-lg'>
            {footerLinks.map((item)=> (
                <a href="#" className='hover:text-gray-300 transition-colors duration-300'>{item}</a>
                       ))}
        </div>
        
    </div>
    <h2>@copy 2026 Temuulen</h2>
    </div>
  )
}

export default Footer