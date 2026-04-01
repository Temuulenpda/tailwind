import React from 'react'
import leftImage from "../assets/monitor-card.webp"
const Schedule = () => {
  return (
    <div className='flex sm:flex-col w-full md:flex-row sm:items-center'>
         <div className='w-1/2 sm:px-4 md:px-8 sm:w-2/3'>
        <h1 className='text-green-900 font-semibold'>MONITOR</h1>
        <h2 className=' text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6'>
            Introducing best mobile carousels
        </h2>
        <p className='text-gray-800 mb-8'>
           Before the ship is really back . Round , round , all round the world.Round all 
           around the world.Round all around the world
        </p>
       <div className='flex items-center'>
        <p className='text-blue-500 font-semibold'>learn more about monitoring</p>
        <p className='text-blue-500'>➡</p>
       </div>
        </div>
        <div className='w-1/2 sm:px-4 sm:items-center md:px-8 flex justify-center md:mr-8'>
         <img src={leftImage} alt="" />
        </div>
       
    </div>
  )
}

export default Schedule
