import React, { useState } from 'react'
import logo1 from '../../assets/logo1.png'
import Union from '../../assets/Union.png'
import Vector from '../../assets/Vector.png'
import cart from '../../assets/cart.png'
import profile from '../../assets/profile.png'
import { IoLocationOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineMenu, HiX } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);



  return (
   <div className="w-full bg-white shadow-sm relative px-4 md:px-6 py-4">

      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img src={logo1} className="w-[140px] md:w-[180px]" alt="Logo" />

         
        </div>

        {/* Search (Desktop Only Inline) */}
       <div className='flex gap-2'>
         <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
            <IoLocationOutline />
            <span>Location</span>
          </div>
          <div className="hidden md:flex items-center w-[450px] h-[40px] bg-[#ECF0F1] rounded-3xl px-4">
           <div className='w-[50px] h-[40px] flex items-center'> <CiSearch className="w-4 h-4 text-gray-500" /></div>
            <div className="w-[400px] h-[40px]">
              <input type="text" placeholder='search for Icecream' className=' w-[400px] h-[40px]  outline-none'/>
            </div>
          </div>
       </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex flex-col items-center text-xs">
            <img src={Union} className="w-6 h-6" alt="" />
            <span>AI</span>
          </div>

          <div className="flex flex-col items-center text-xs">
            <img src={Vector} className="w-6 h-6" alt="" />
            <span>Offers</span>
          </div>

          <div className="flex flex-col items-center text-xs">
            <img src={cart} className="w-6 h-6" alt="" />
            <span>Cart</span>
          </div>

          <div className="flex flex-col items-center text-xs">
            <img src={profile} className="w-6 h-6" alt="" />
            <span>Profile</span>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>

      </div>

      {/* Search Bar (Mobile Only Below) */}
      <div className="mt-4 md:hidden">
        <div className="flex items-center w-full h-[40px] bg-[#ECF0F1] rounded-3xl px-4">
          <CiSearch className="w-4 h-4 text-gray-500" />
          <span className="ml-2 text-gray-600 text-sm">
            Search for “Ice Cream”
          </span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md mt-2 py-4 px-6 flex flex-col gap-4 z-50">

          <div className="flex items-center gap-3">
            <img src={Union} className="w-6 h-6" alt="" />
            <span>AI</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={Vector} className="w-6 h-6" alt="" />
            <span>Offers</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={cart} className="w-6 h-6" alt="" />
            <span>Cart</span>
          </div>

          <div className="flex items-center gap-3">
            <img src={profile} className="w-6 h-6" alt="" />
            <span>Profile</span>
          </div>

        </div>
      )}

    </div>



  )
}

export default Header