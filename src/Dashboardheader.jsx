import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { BsCalendarFill } from 'react-icons/bs';
import { TbBellFilled } from 'react-icons/tb';
import button01 from './admin/image/button01.png'; // Adjust path as needed
import profile from './admin/image/profile.jpg';

function Dashboardheader() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
 <div className="w-full max-w-[1224.47px] h-auto mt-[44.59px] flex flex-col md:flex-row justify-between mb-4">
    {/* Buttons row - always on top */}
    <div className="w-full md:w-[269px] h-[44px] ms-[14.85px] flex gap-3 mb-4 md:mb-0">
        <div className="w-[117px] h-[40px] flex justify-center items-center rounded-3xl bg-white gap-2">
            <div className="w-[32px] h-[32px] bg-[#FDF8E2] rounded-full flex justify-center items-center text-[#F39C12]"><IoMdAdd/></div>
            <p className='text-[10px]'>Add Product</p>
        </div>
        <div className="w-[117px] h-[40px] flex justify-center items-center rounded-3xl bg-white gap-2">
            <div className="w-[32px] h-[32px] bg-[#FDF8E2] rounded-full flex justify-center items-center">
                <img src={button01} alt="" />
            </div>
            <p className='text-[10px]'>Assign Delivery</p>
        </div>
    </div>

    {/* Search and icons row */}
    <div className="w-full md:w-[697px] h-[44px] flex justify-center gap-3 md:ms-[-100px]">
        <div className='w-full md:w-[505.94px] h-[40px] bg-white rounded-l-3xl rounded-r-3xl flex'>
            <div className="w-[32px] h-[40px] flex justify-center items-center"><CiSearch/></div>
            <div className="flex-1 h-[40px]"><input className='w-full h-full' type="text" placeholder='Search' /></div>
        </div>

        {/* icons for larger screens */}
        <div className="hidden md:flex gap-3">
            <div className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center"> <BsCalendarFill className='w-[18.79px] h-[18.79px]'/></div>
            <div className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center"><TbBellFilled className='w-[20.79px] h-[20.79px]'/></div>
            <div className="w-[44px] h-[44px] bg-white rounded-full object-contain"><img src={profile} className='rounded-full' alt="" /></div>
        </div>

        {/* dropdown for small screens */}
        <div className="md:hidden relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center">
                {/* Hamburger or dots icon - using SVG for simplicity */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="flex flex-col gap-2 p-2">
                        <div className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center"> <BsCalendarFill className='w-[18.79px] h-[18.79px]'/></div>
                        <div className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center"><TbBellFilled className='w-[20.79px] h-[20.79px]'/></div>
                        <div className="w-[44px] h-[44px] bg-white rounded-full object-contain"><img src={profile} className='rounded-full' alt="" /></div>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>
    </>
  )
}

export default Dashboardheader