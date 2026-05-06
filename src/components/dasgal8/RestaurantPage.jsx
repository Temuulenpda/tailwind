import React, { useState } from 'react'
import Navbar from './Navbar'
import ChefSection from './ChefSection'
import MenuSection from './MenuSection'
import Footer from './Footer'
import Showcase from './Showcase'
import Order from './Order'
import AuthModal from './AuthModal'

const RestaurantPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState("booking")
  return (
    <div> 
        <Navbar   
        openBooking={() => { setAuthOpen(true); setAuthMode("booking"); }} 
        openLogin={() => { setAuthOpen(true); setAuthMode("login"); }} />
        <Order state={isOpen} close={() => setIsOpen(false)} />
        <AuthModal 
        open={authOpen} 
        mode={authMode}
        close={() => setAuthOpen(false)} 
        switchMode={() => setAuthMode((currentMode) => 
        currentMode === "booking" ? "login" : "booking")} />
        <Showcase open={() => setIsOpen(true)} />
        
         <MenuSection />
        <ChefSection />
        <Footer />
    </div>
  )
}

export default RestaurantPage