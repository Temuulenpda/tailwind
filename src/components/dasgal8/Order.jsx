import React from 'react'
import { menuDetails } from './Dasgal8data/data';
menuDetails
const Order = ({state ,close}) => {
    if(!state) { 
            return null;
        }
  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center px-4 py-8 bg-black/50'>
       <div className='max-h-[100vh] w-full max-w-5xl overflow-y-auto bg-white rounded-2xl p-8 flex flex-col gap-8 justify-center items-center'>
        <div className='w-full flex items-start justify-between gap-4'>
            <h2 className='text-orange-400 font-bold'>FEATURED    MENU</h2>
            <button className='bg-orange-100 font-bold text-orange-500  py-2 px-4 rounded-2xl hover:bg-orange-300' onClick={close}>
                Close
            </button>
        </div>
        <div className='flex flex-col items-start gap-8 w-full'>
            <div className='flex flex-col gap-6 mb-8'>
            <h1 className='font-bold text-3xl'>Take a closer look at today's popular dishes</h1>
            <p className='text-gray-500'>This demo menu overview gives costumers a quick look at the restaurant's featured meals before ordering.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
           {menuDetails.map((item) => (
            <div className='flex flex-col gap-4 mb-4 rounded-2xl w-[1/3] p-4 bg-orange-100 '>
                <div className='flex w-full flex-wrap justify-between items-center'>
                    <h3 className='font-bold text-2xl'>{item.name}</h3>
                    <p className='font-semibold text-orange-500'>{item.price}</p>
                </div>
                <p className='text-gray-500'>{item.description}</p>
                <div className='text-gray-700'>
                    <p>serving: {item.serving}</p>
                    <p>prep time: {item.prepTime}</p>
                </div>
                <div>
                    {item.extras.map((extra) => (
                        <p className='rounded-2xl bg-white p-2 m-2 text-gray-500'> {extra}</p>
                    ))}
                </div>
            </div>
           ))}
        </div>
        </div>
       </div>
    </div>
  )
}

export default Order