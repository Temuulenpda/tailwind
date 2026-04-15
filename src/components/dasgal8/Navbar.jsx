import React from "react";
import { navLinks } from "./Dasgal8data/data";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("false");
  return (
      <div className="w-full shadow-lg">
        <div className=" p-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-extrabold  text-xl md:ml-20 text-orange-500">
          Foodhouse
 
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3 text-white">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="">About</a>
            <a href="#">Reservation</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4 mr-60 hidden md:block">
          <button className="bg-orange-500 w-25 h-10 rounded-xl text-white">Book Table</button>
        </div>
        {activeLink ? (
          <HiX
            onClick={() => setActiveLink(false)}
            className="w-8 h-8 md:hidden text-white"
          />
        ) : (
          <HiMenu
            onClick={() => setActiveLink(true)}
            className="w-8 h-8 md:hidden text-white"
          />
        )}
      </div>
      {activeLink && (

        <div className="flex flex-col md:hidden md:block  p-4">
           {navLinks.map((item)=> (
            <div>{item.name}</div>
           ))}

        </div>
      )}
    </div>
  );
};

export default Navbar;

