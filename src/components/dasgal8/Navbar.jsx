import React from "react";
import { navLinks } from "./Dasgal8data/data";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("true");
  return (
    <div>
      <div className="bg-gray-300 shadow-sm p-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-extrabold text-purple-500 text-xl md:ml-20">
            EduSmart
          </div>
        </div>
        <div className="flex hidden md:block">
          <div className="flex gap-3 text-white">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="">About</a>
            <a href="#">Reservation</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4 mr-60 md:block sm:hidden">
          <button className="bg-white w-25 h-10 rounded-xl">Sign Up</button>
          <button className="bg-[#8b3dff] w-25 h-10 rounded-xl text-white">
            Login
          </button>
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
        <div className="flex flex-col md:hidden md:block bg-gray-300 shadow-sm  p-4">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Teacher</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
