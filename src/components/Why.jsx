import React from 'react'
import {features} from "../data/data"
const Why = () => {
  return (
    <div className='w-full mx-auto px-4 py8  flex flex-col justify-center mb-10'>
        <h1 className='text-center text-3xl font-bold mb-4'>Why choose us?</h1>
        <p className='text-center text-gray-600 mb-8'>We help students learn with confidence</p>
        <div className='flex sm:flex-col md:flex-row gap-5'>
            {features.map((item,index) => (
                <div className='flex flex-1 flex-col justify-center items-center p-6  h-40 bg-indigo-100  rounded-xl flex justify-center items-center mb-4 '>
                    <div>
                       <div className='text-3xl'> {item.icon}</div>
                    </div>
                    <p className='text-2xl mb-4 font-semibold'>{item.title}</p>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Why