import React from 'react'
import { dishes } from './Dasgal8data/data'
import { menuDetails } from './Dasgal8data/data';
const MyOrder = ({ state, close ,openAddFood, orders = [], onRemoveOrder }) => {
  if (!state) return null;
  
  // Get menu details for ordered items
  const getOrderedDishes = () => {
    return orders.map(itemId => menuDetails.find(d => d.id === itemId)).filter(Boolean)
  }
  
  const orderedDishes = getOrderedDishes()
  return (
    
    <div >
        <div className=' w-full h-full md:h-screen bg-orange-50'>
      <div className="md:mr-60 md:ml-60 py-10 flex flex-col items-center ">
        <div className='flex w-full justify-center items-center md:justify-between md:flex-row flex-col mb-10'>
         <div className="flex justify-start mb-4 flex-col">
          <h3 className='font-semibold text-orange-600'>MY ORDERS</h3>
          <h1 className='text-4xl font-bold'>Your recent food orders</h1>
          <p className='text-gray-600'>Review your current and previous orders with quick status updates</p>
        </div>
         <div>  
            <button onClick={openAddFood} className="text-orange-600 bg-orange-200 rounded-2xl text-xl py-3 px-5 mr-4">+Add food</button>
            <button onClick={close} className="text-white bg-orange-600 rounded-2xl text-xl py-3 px-5">Back to home</button>
          </div>
           
        </div>
        <div className='flex flex-row w-full gap-5 m-0'>
            <div className='bg-white rounded-2xl w-full flex flex-row justify-center h-20 items-center mb-10 mt-10'>
             
              {orderedDishes.length === 0 ? (
               
                <div className='flex justify-center items-center flex-col'>
                  <h1 className='text-xl font-bold text-gray-800'>No food added yet</h1>
                  <p className='text-gray-500'>Press the + Add Food button to add dishes to your order list </p></div>
              ) : (
                <div className='flex flex-row gap-4 w-full overflow-x-auto bg-orange-50 '>
                  {orderedDishes.map((item, index) => (
                    <div key={index} className='bg-white rounded-xl p-4 flex-shrink-0 w-[400px]'>
                      <div className='flex justify-between items-start mb-3'>
                        <h3 className='font-bold text-lg text-orange-600'>{item.name}</h3>
                        
                      </div>
                      <div className='space-y-2'>
                        <div className='flex gap-2'>
                          <span className='text-gray-600 '>Estimated time:</span>
                          <span className='font-semibold text-gray-800'>{item.prepTime}</span>
                        </div>
                        <div className='flex justify-between bg-orange-50 w-full p-2 rounded-2xl '>
                          <span className='text-gray-600 text-sm'>Price:</span>
                          <span className='font-bold text-orange-600'>{item.price}</span>
                        </div>
                        <button onClick={() => onRemoveOrder(index)} className='text-red-500 text-lg font-semibold border rounded-2xl w-full py-2'>Cancel</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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