import React, { useState } from 'react'
import Navbar from './Navbar'
import ChefSection from './ChefSection'
import MenuSection from './MenuSection'
import Footer from './Footer'
import Showcase from './Showcase'
import Order from './Order'
import AuthModal from './AuthModal'
import MyOrder from './MyOrder'
import AddFood from './AddFood'
const RestaurantPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState("booking")
  const [addf, setAddf] = useState(false)
  const [screen, setScreen] = useState("home")
  const [orders, setOrders] = useState([])
  
  const handleAddToOrder = (itemId) => {
    setOrders([...orders, itemId])
    setAddf(false)
  }
  
  const handleRemoveOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index))
  }
  return (
    <div> 
        <Navbar  
        openBooking={() => { setAuthOpen(true); setAuthMode("booking"); }} 
        openLogin={() => { setAuthOpen(true); setAuthMode("login"); }}
        openMyOrders={() => { setScreen("myorders"); }}
        screen={screen}
        />
        {screen === "home" && (  
          <>
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
          </>
        )}
        <MyOrder state={screen === "myorders"}  close={() => setScreen("home")}
          openAddFood={() => setAddf(true)} orders={orders} onRemoveOrder={handleRemoveOrder} />
        <AddFood state={addf} close={() => setAddf(false)} onAddToOrder={handleAddToOrder}
          />
    </div>
  
  )
}

export default RestaurantPage