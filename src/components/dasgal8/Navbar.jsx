import React from "react";
import { navLinks } from "./Dasgal8data/data";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
const Navbar = ({ openBooking, openLogin, openMyOrders, screen }) => {
  const [activeLink, setActiveLink] = useState(false);
  
  if (screen !== "home") return null;
  
  return (
      <div id="navbar" className="w-full bg-white shadow-md relative z-40">
        <div className=" p-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-extrabold  text-xl md:ml-20 text-orange-500">
         <h1> Foodhouse</h1>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3">
           {navLinks.map((item , index) => (
            <a href={item.href} className="text-gray-700 hover:text-orange-500">
              {item.name}
            </a>
           ))}
          </div>
        </div>
        <div className="flex mr-60 hidden md:block">
          <button className="border border-orange-200 w-25 h-10 rounded-xl text-orange-600 bg-orange-100 hover:bg-orange-300 mr-3" onClick={openMyOrders}>My Orders</button>
          <button className="bg-orange-500 w-25 h-10 rounded-xl text-white mr-3 hover:bg-orange-600" onClick={openBooking}>Book Table</button>
          <button className="border border-orange-500 w-25 h-10 rounded-xl text-orange-600 hover:bg-gray-100" onClick={openLogin}>Login</button>
        </div>
        {activeLink ? (
          <HiX
            onClick={() => setActiveLink(false)}
            className="w-8 h-8 md:hidden"
          />
        ) : (
          <HiMenu
            onClick={() => setActiveLink(true)}
            className="w-8 h-8 md:hidden"
          />
        )}
      </div>
      {activeLink && (

        <div className="flex flex-col md:hidden block  p-4">
           {navLinks.map((item)=> (
            <div className="text-gray-600 mb-2">{item.name}</div>
           ))}
            <div className="flex gap-2 mr-60 block md:hidden mt-4">
          <button className="bg-orange-500 w-25 h-10 rounded-xl text-white" onClick={openBooking}>Book Table</button>
          <button className="border border-orange-500 w-25 h-10 rounded-xl text-orange-600 " onClick={openLogin}>Login</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

