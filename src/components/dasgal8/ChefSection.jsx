import React from 'react'
import { chefInfo } from './Dasgal8data/data'
import  chefinfo  from './dimage/chefInfo.avif'
const ChefSection = () => {
  return (
    <div id='About'>
         <div className='w-full md:flex-row flex sm:flex-col py-8 px-4 bg-orange-100'>
              <div className='sm:w-full md:w-1/2 flex justify-center  items-center '>
                           <img src={chefInfo.image} alt="" className='w-5/6 rounded-2xl' />
                           
                       </div>
                       <div className='sm:w-full md:w-1/2 '>
                         <div className='flex items-center gap-2  p-4'>
                           <span className='text-orange-500 font-semibold'>Meet the chef</span>
                       </div>
                       <div>
                            <h1 className='text-3xl font-bold mb-4'>{chefInfo.title}</h1>
                            <p className='text-gray-600 mb-8'>{chefInfo.description}</p>
                       </div>
                            <button className=' px-8 py-4 rounded-xl bg-orange-500  text-white'>
                                Learn More
                           </button>
                       </div>
                       </div>
                     
                     
               
                   </div>
   
  )
}

export default ChefSection