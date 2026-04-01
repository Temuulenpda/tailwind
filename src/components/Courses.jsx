import React from 'react'
import {Hicelud} from "../data/data"
const Courses = () => {
  return (
    <div className='w-full mx-auto px-4 py8  flex flex-col justify-center mb-10'>
            <h1 className='text-center text-3xl font-bold mb-4'>Popular Courses</h1>
            <p className='text-center text-gray-600 mb-8'>Choose a course and start building a skill</p>
            <div className='flex sm:flex-col md:flex-row gap-5'>
                {Hicelud.map((item,index) => (
                    <div className='flex flex-1 flex-col justify-start items-start p-6    bg-indigo-100  rounded-xl flex justify-center items-center mb-4 '>
                        <div className="h-50 w-100 bg-gray-900 rounded-xl"></div>
                        <div>
                           <div className='text-sm text-purple-400'> {item.level}</div>
                        </div>
                        <p className='text-2xl mb-4 font-semibold'>{item.title}</p>
                        <p className='text-gray-500'>{item.description}</p>
                        <button className="bg-indigo-700 text-white rounded-xl px-4 py-3">Join now</button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Courses