import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BiSolidCart } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import './style.css';

const Menu = ({ setIsShow, isShow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showCart = () => {
    setIsShow(!isShow); // Show the cart when the button is clicked
  };

  return (
    <div className="w-full h-32 md:mt-5">
      <div className="w-full h-full flex items-center justify-between">
        <img className="md:h-28 h-20 w-auto ml-[8%]" src={logo} alt="logo" />

        <IoMenu onClick={toggleMenu} className="lg:hidden text-3xl text-[#008a0e] cursor-pointer md:mr-4" />

        <div
          id="effect"
          className={`lg:flex ${isOpen ? "flex" : "hidden"} lg:gap-8 flex-col lg:flex-row lg:items-center font-medium text-lg bg-[#e6e6e6] text-[#008a0e] lg:bg-transparent absolute lg:static top-20 right-0 lg:right-auto lg:top-auto lg:w-auto w-full lg:h-full h-auto lg:ml-0 lg:mt-0 mt-[45px] lg:mr-0`}
        >
          <h4 className="p-4 lg:p-0 cursor-pointer hover:text-[#1f6b1d]" onClick={toggleMenu}>Home</h4>
          <h4 className="p-4 lg:p-0 cursor-pointer hover:text-[#1f6b1d]" onClick={toggleMenu}>Menu</h4>
          <h4 className="p-4 lg:p-0 cursor-pointer hover:text-[#1f6b1d]" onClick={toggleMenu}>Reservation</h4>
          <h4 className="p-4 lg:p-0 cursor-pointer hover:text-[#1f6b1d]" onClick={toggleMenu}>Events</h4>
          <h4 className="p-4 lg:p-0 cursor-pointer hover:text-[#1f6b1d]" onClick={toggleMenu}>Contact</h4>
        </div>

        <div className="font-medium gap-6 ml-[9%] flex w-1/6 h-full items-center text-3xl text-[#008a0e] mr-4 lg:mr-[-40px] md:mr-0">
          <CiSearch />
          <div>
            <button onClick={showCart}><BiSolidCart /></button> {/* Cart button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
