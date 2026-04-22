import React, { useState } from 'react'
import Navbar from './Navbar'
import ChefSection from './ChefSection'
import MenuSection from './MenuSection'
import Footer from './Footer'
import Showcase from './Showcase'
import Order from './Order'

const RestaurantPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <div> 
        <Navbar />
        <Order state={isOpen} close={() => setIsOpen(false)} />
        <Showcase open={() => setIsOpen(true)} />
         <MenuSection />
        <ChefSection />
        <Footer />
    </div>
  )
}

export default RestaurantPage