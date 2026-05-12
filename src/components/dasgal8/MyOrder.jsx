import React from 'react'
import { dishes } from './Dasgal8data/data'
const MyOrder = ({ state, close }) => {
  if (!state) return null;
  
  return (
    <div >
        <div className=' w-full h-full md:h-screen bg-orange-100'>
      <div className="md:mr-60 md:ml-60 py-10 flex flex-col items-center ">
        <div className='flex w-full justify-center items-center md:justify-between md:flex-row flex-col mb-10'>
         <div className="flex justify-start mb-4 flex-col">
          <h3 className='font-semibold text-orange-600'>MY ORDERS</h3>
          <h1 className='text-4xl font-bold'>Your recent food orders</h1>
          <p className='text-gray-600'>Review your current and previous orders with quick status updates</p>
        </div>
         <div>
            <button onClick={close} className="text-white bg-orange-600 rounded-2xl text-xl py-3 px-5">Back to home</button>
          </div>
           
        </div>
        <div className='flex flex-col md:flex-row w-full gap-5'>
            <div className='bg-white rounded-2xl w-full md:w-1/2 '>
               <div className='flex flex-row justify-between'>
                <div className='ml-5 mt-5 flex flex-col gap-2'>
                 <h1 className='text-orange-600 font-semibold '>
                    ORDER FH-2041
                </h1>   
                <h1 className='font-bold text-2xl'>
                    GRILLED STEAK
                </h1>
                <h3 className='text-gray-600 font-medium'>Estimated time : 15min</h3>
               </div>
               <div className='px-4 py-2 h-10 mt-5 mr-5 bg-orange-200 text-orange-600 font-semibold  rounded-2xl '>
                <h1>PREPARING</h1>
                </div>
               </div>
                <div className='bg-orange-200 m-5 rounded-2xl p-2 flex flex-col gap-2'>
                    <h1 className='font-medium text-gray-700'>Total: 18$</h1>
                </div>
            </div>
              <div className='bg-white rounded-2xl w-full md:w-1/2 '>
               <div className='flex flex-row justify-between'>
                <div className='ml-5 mt-5 flex flex-col gap-2'>
                 <h1 className='text-orange-600 font-semibold '>
                    ORDER FH-2048
                </h1>   
                <h1 className='font-bold text-2xl'>
                    HEALTHY SALAD
                </h1>
                <h3 className='text-gray-600 font-medium'>Estimated time : COMPLETED</h3>
               </div>
               <div className='px-4 py-2 h-10 mt-5 mr-5 bg-orange-200 text-orange-600 font-semibold  rounded-2xl '>
                <h1>DELIVERED</h1>
                </div>
               </div>
                <div className='bg-orange-200 m-5 rounded-2xl p-2 flex flex-col gap-2'>
                    <h1 className='font-medium text-gray-700'>Total: 10$</h1>
                </div>
            </div>
            
        </div>
       <div className='w-full flex justify-start flex-col'><h1 className='text-2xl font-bold mt-10 '>POPULAR DISHES</h1>
        <div className='flex flex-col md:flex-row gap-4 w-full mt-10'>
            
           {dishes.map((item) => (
            <div className='w-full h-full overflow-hidden bg-white rounded-xl  mb-4 shadow-md flex justify-between items-center'>
               <div className='flex flex-col w-full'>
                {item.image && <img src={item.image} alt={item.name} className='w-full h-48 object-cover rounded-xl' />}
               <div className='flex flex-row w-full justify-between mt-4 p-4'>
                 <div>
               <h1 className='font-bold text-2xl'>{item.name}</h1> 
               <h2 className='text-gray-600'>{item.description}</h2>
                </div>
                <p className='text-xl font-bold text-orange-600'>{item.price}$</p>
               </div>
               </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default MyOrder