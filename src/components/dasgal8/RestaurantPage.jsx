import React from 'react'
import Navbar from './Navbar'
import ChefSection from './ChefSection'
import MenuSection from './MenuSection'
import Footer from './Footer'
import Showcase from './Showcase'
const RestaurantPage = () => {
  return (
    <div> 
        <Navbar />
        <Showcase />
         <MenuSection />
        <ChefSection />
        <Footer />
    </div>
  )
}

export default RestaurantPage