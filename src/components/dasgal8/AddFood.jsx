import React from 'react'
import { dishes } from './Dasgal8data/data'
const AddFood = ({ state, close, onAddToOrder }) => {
    if (!state) return null;

  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center  px-4 py-8 bg-black/50 '>
       <div className='bg-white w-full ml-40 mr-40 rounded-3xl p-6 shadow-xl md:p-8'>
         <div>
            <div className='flex flex-row justify-between items-center mb-2'>
                <h1 className='text-lg font-semibold text-orange-500'>Add Food</h1>
                <button onClick={close} className='bg-gray-100 text-gray-800 hover:bg-gray-300 rounded-2xl py-2 px-4'> Close</button>
            </div>
        </div>  
        <div className='mb-4'>
            <h1 className='text-3xl font-bold mb-4'>Choose from popular dishes</h1>
            <p className='text-gray-500 '>pick one of the available dishes and add it to your orders.</p>
        </div>
        <div className='flex flex-row gap-4 w-full flex-wrap'>
             {dishes.map((item) => (
                     <div className='flex flex-1 bg-white flex-col overflow-hidden md:w-1/3 h-100 rounded-xl mb-4 shadow-lg'>
                            <img className='w-full h-50 object-cover' src={item.image} alt={item.name} />
                                           
                         <div className='flex flex-row justify-between p-4 flex-1'>
                           <div>
                             <p className='text-xl mb-4 font-semibold'>{item.name}</p>
                              <p className='text-gray-500 text-md'>{item.description}</p>
                           </div>
                               <p className='text-orange-500 font-bold'>{item.price}</p>
                        </div>
                        <div className='w-4/5 mx-auto mb-4'>
                            <button onClick={() => onAddToOrder(item.id)} className='bg-orange-500 text-white font-semibold rounded-2xl py-2 px-8 w-full hover:bg-orange-600'>Add to order</button>
                        </div>
                      </div>
                    ))}
        </div>
       </div>
    </div>
  )
}

export default AddFood