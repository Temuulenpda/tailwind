import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("true");
  return (
    <div>
      <div className="bg-indigo-700 shadow-sm p-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-extrabold text-purple-700 text-xl md:ml-20">
            EduSmart
          </div>
        </div>
        <div className="flex hidden md:block">
          <div className="flex gap-3">
            <a href="#">Home</a>
            <a href="#">Coursed</a>
            <a href="">Teachers</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex w-50 mr-30 hidden md:block ">
          <button className="bg-white w-20 h-10 mr-10 rounded-xl">Sign Up</button>
          <button className="bg-[#8b3dff] w-20 h-10 rounded-xl text-white">
            Login
          </button>
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
        <div className="flex flex-col block md:hidden bg-indigo-700 shadow-sm  p-4 text-white">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Teacher</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
