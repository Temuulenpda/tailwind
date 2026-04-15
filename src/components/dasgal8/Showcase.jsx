import React from 'react'
import Showimage from "./dimage/ShowCaseImage.avif"
const Showcase = () => {
  return (
    <div className='w-full md:flex-row flex sm:flex-col py-8 px-4 bg-orange-100'>
               <div className='sm:w-full md:w-1/2 '>
                 <div className='flex items-center gap-2  p-4'>
                   <span className='text-orange-500 font-semibold'>Fresh and tasty</span>
               </div>
               <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                   Enjoy delicious meals made with fresh ingredients
               </h1>
               <p className='text-gray-600 text-lg md:text-xl mt-8 w-2/3 text-gray-300'>
                   Experience warm service,beautiful dishes,and a comfortable place for family and friends
               </p>
               <div className='mt:8 p-4 flex gap-4 w-2/3'>
                   <button className='bg-orange-500  text-white px-6 py-4 rounded-xl'>
                        Order Now
                   </button>
                    <button className='bg-white  px-8 py-4 rounded-xl '>
                        View Menu
                   </button>
               </div>
               </div>
             
               <div className='sm:w-full md:w-1/2 flex justify-center  items-center '>
                   <img src={Showimage} alt="" className='w-5/6 rounded-2xl' />
                   
               </div>
       
           </div>
  )
}

export default Showcase