import React from 'react'
import { dishes } from './Dasgal8data/data'
import GrilledSteak from './dimage/GrilledSteak.avif'
import HealthySalad from './dimage/HealthySalad.avif'
import ItalianPast from './dimage/ItalianPasta.avif'

const MenuSection = () => {
  return (
    <div id='Menu'>
         <div className='w-full mx-auto px-4 py8  flex flex-col justify-center mb-10'>
                    <h1 className='text-center text-3xl font-bold mb-4'>Popular Menu</h1>
                    <p className='text-center text-gray-600 mb-8'>Discover our most loved dishes</p>
                    <div className='flex sm:flex-col md:flex-row gap-8 justify-center items-centers '>
                        {dishes.map((item) => (
                            <div className='flex flex-1 bg-orange-100 flex-col overflow-hidden md:w-1/3 h-110 rounded-xl mb-4 shadow-lg'>
                                <img className='w-full h-70 object-cover' src={item.image} alt={item.name} />
                               
                               <div className='flex flex-row p-4 flex-1'>
                                 <div>
                                    <p className='text-2xl mb-4 font-semibold'>{item.name}</p>
                                <p className='text-gray-500'>{item.description}</p>
                                </div>
                                <p className='text-orange-500 font-bold'>{item.price}</p>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default MenuSection