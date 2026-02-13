import React, { useState } from 'react'
import logo01 from '../admin/image/logo01.png'
import icon1 from './image/icon1.png'
import icon2 from './image/icon2.png'
import icon3 from './image/icon3.png'
import icon4 from './image/icon4.png'
import icon5 from './image/icon5.png'
import profile from './image/profile.jpg'
import button01 from './image/button01.png'
import dollar from './image/dollar.png'
import users from './image/users.png'
import cart from './image/cart.png'
import inventory from './image/inventory.png'
import graph01 from './image/graph01.png'
import check from './image/check.png'
import card6 from './image/card6.png'
import graph02 from './image/graph02.png'
import status01 from './image/status01.png'
import status02 from './image/status02.png'
import status03 from './image/status03.png'
import status04 from './image/status04.png'
import { IoMdAdd } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { BsArrowUpRight, BsCalendarFill, BsFillTriangleFill } from 'react-icons/bs'
import { TbBellFilled } from 'react-icons/tb'
import { GoArrowUpRight } from 'react-icons/go'
import { IoWarningSharp } from 'react-icons/io5'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import Dashboardheader from '../Dashboardheader'


function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
   
  return (
    <>
    <div className="w-full 
                min-h-screen 
                bg-[#ECF0F1] 
                flex 
                flex-col 
                lg:flex-row">
        {/* sidebar  */}
       <div className="relative">
    {/* Toggle button for small screens */}
    <button 
        onClick={() => setSidebarOpen(!sidebarOpen)} 
        className="md:hidden fixed top-4 left-4 z-50 w-[40px] h-[40px] bg-white  mt-[-20px] ms-[-20px] flex justify-center items-center shadow-lg"
    >
        {/* Hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>

    {/* Sidebar */}
    <div className={`fixed inset-y-0 left-0 z-40 w-[215.53px] h-[1003.06px] bg-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-[40px] h-[40px] bg-[#ECF0F1]"></div>
        <div><img src={logo01} className='w-[117.35px] h-[31.7px] ms-[40px]' alt="" /></div>
        <div className="w-[164.63px] h-[257.12] ms-[40px] mt-[41.84px]">
            <div className="w-[164.63px] text-[#27AE60] h-[49.28px] bg-gradient-to-r from-[#27AE6042] to-[#E5FFF045] rounded-[12px] flex items-center gap-2 px-4">
                <img src={icon1} alt="" />Dashboard
            </div>
            <div className="w-[164.63px] h-[49.28px] text-[#8F8F8F] flex items-center gap-2 px-3 rounded-[12px] mt-2">
                <img src={icon2} className="w-[20px] h-[23.09px]" alt="Products icon" /> 
                <p className="font-medium text-[16px]">Products</p>
            </div>
            <div className="w-[164.63px] h-[49.28px] text-[#8F8F8F] flex items-center gap-2 px-3 rounded-[12px] mt-2">
                <img src={icon3} className="w-[20px] h-[23.09px]" alt="Promotion icon" /> 
                <p className="font-medium text-[16px]">Promotion</p>
            </div>
            <div className="w-[164.63px] h-[49.28px] text-[#8F8F8F] flex items-center gap-2 px-3 rounded-[12px] mt-2">
                <img src={icon4} className="w-[20px] h-[23.09px]" alt="Orders icon" /> 
                <p className="font-medium text-[16px]">Orders</p>
            </div>
            <div className="w-[164.63px] h-[49.28px] text-[#8F8F8F] flex items-center gap-2 px-3 rounded-[12px] mt-2">
                <img src={icon5} className="w-[20px] h-[23.09px]" alt="More icon" /> 
                <p className="font-medium text-[16px]">More</p>
            </div>
        </div>
    </div>

    {/* Overlay for small screens when sidebar is open */}
    {sidebarOpen && <div className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>}
</div>


        {/* main content */}
          <div className='flex flex-col '>
            {/* Header */}
            <Dashboardheader/>      
         
               {/* CARD SECTION */}
          <div
            className="
            mt-[-50px]
            flex flex-col
            lg:flex-row
            lg:flex-wrap
            gap-6
            lg:gap-0
          "
          >
            
            {/* cards 1 */}
             <div className="w-full 
    mt-6 sm:mt-10 lg:mt-20 
    flex flex-col lg:flex-row 
    flex-wrap 
    gap-6 lg:gap-0 
    h-auto lg:h-[503.79px]
    ">
    
        {/* card 1 */}
       <div
      className="
      w-[382px]
      h-auto lg:h-[274px]
      bg-white rounded-2xl
      mt-3 mb-3 lg:mt-0 lg:mb-0
      lg:ms-[14.85px]
      overflow-hidden
    "
    >
      {/* Days Row */}
      <div className="w-full h-[70px] flex justify-start lg:justify-center mt-4 gap-1.5 overflow-x-auto px-2">
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#F9F9F9] flex flex-col justify-center items-center text-[#8F8F8F]">
          <p>Sun</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white flex justify-center items-center">02</div>
        </div>
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#2ECC71] flex flex-col justify-center items-center text-white">
          <p>Mon</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white text-black flex justify-center items-center">03</div>
        </div>
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#F9F9F9] flex flex-col justify-center items-center text-[#8F8F8F]">
          <p>Tue</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white flex justify-center items-center">03</div>
        </div>
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#F9F9F9] flex flex-col justify-center items-center text-[#8F8F8F]">
          <p>Wed</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white flex justify-center items-center">04</div>
        </div>
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#F9F9F9] flex flex-col justify-center items-center text-[#8F8F8F]">
          <p>Thu</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white flex justify-center items-center">05</div>
        </div>
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#F9F9F9] flex flex-col justify-center items-center text-[#8F8F8F]">
          <p>Fri</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white flex justify-center items-center">06</div>
        </div>
    
        <div className="min-w-[45px] h-[70px] rounded-full bg-[#F9F9F9] flex flex-col justify-center items-center text-[#8F8F8F]">
          <p>Sat</p>
          <div className="w-[37px] h-[38px] rounded-full bg-white flex justify-center items-center">07</div>
        </div>
      </div>
    
      {/* Sales Section */}
      <div className="w-full flex justify-between px-4 mt-5">
    
        <div className="flex items-center gap-2">
          <img src={dollar} className="w-[13px] h-[21px]" alt="" />
          <p>Total Sales</p>
        </div>
    
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold text-gray-800">₹ 90K</p>
          <span className="flex items-center gap-1 text-[#27AE60] text-sm font-medium">
            <BsFillTriangleFill className="text-[10px]" />5%
          </span>
        </div>
      </div>
    
      {/* Bottom Small Cards */}
      <div className="w-full flex justify-center mt-6 gap-2 px-2 overflow-x-auto ">
    
        <div className="min-w-[113.34px] h-[104.94px] bg-[#FFFBE2] rounded-2xl flex flex-col">
          <div className="flex justify-between items-center w-[100px] h-[29px] ms-[6.71px] mt-2">
            <div className="w-[32.30px] h-[30px] rounded-full bg-[#F8EF8D] flex justify-center items-center">
              <img src={users} alt="" />
            </div>
            <div className="w-[35.62px] h-[29px] flex items-center justify-center">
              <GoArrowUpRight className="text-lg" />
            </div>
          </div>
          <div className="text-[10px] ms-[8.02px] mt-2">CUSTOMERS</div>
          <div className="flex ms-[8.1px]">
            <p className="flex gap-3">
              1K
              <span className="text-[#27AE60] flex">
                <BsFillTriangleFill className="text-[10px] mt-2" />5%
              </span>
            </p>
          </div>
        </div>
    
        <div className="min-w-[113.34px] h-[104.94px] bg-[#F9EEFC] rounded-2xl flex flex-col">
          <div className="flex justify-between items-center w-[100px] h-[29px] ms-[6.71px] mt-2">
            <div className="w-[32.30px] h-[30px] rounded-full bg-[#E8BAF8] flex justify-center items-center">
              <img src={cart} alt="" />
            </div>
            <div className="w-[35.62px] h-[29px] flex items-center justify-center">
              <GoArrowUpRight className="text-lg" />
            </div>
          </div>
          <div className="text-[10px] ms-[8.02px] mt-2">TOTAL ORDERS</div>
          <div className="flex ms-[8.1px]">
            <p className="flex gap-3">
              800
              <span className="text-[#E74C3C] flex">5%</span>
            </p>
          </div>
        </div>
    
        <div className="min-w-[113.34px] h-[104.94px] bg-[#FADDDA] rounded-2xl flex flex-col">
          <div className="flex justify-between items-center w-[100px] h-[29px] ms-[6.71px] mt-2">
            <div className="w-[32.30px] h-[30px] rounded-full bg-[#FF9489] flex justify-center items-center">
              <img src={inventory} alt="" />
            </div>
            <div className="w-[35.62px] h-[29px] flex items-center justify-center">
              <GoArrowUpRight className="text-lg" />
            </div>
          </div>
          <div className="text-[10px] ms-[8.02px] mt-2">TOTAL ORDERS</div>
          <div className="flex ms-[8.1px]">
            <p className="flex gap-3">
              25
              <span className="text-[#E74C3C] flex">
                <IoWarningSharp className="mt-1" />
              </span>
            </p>
          </div>
        </div>
    
      </div>
    </div>
    
    
        {/* card 2 */}
        <div className="w-[395px] 
    h-auto lg:h-[274.65px] 
    bg-white rounded-2xl 
    flex flex-col justify-center 
    mt-3 mb-3 lg:mt-0 lg:mb-0 
    lg:ms-[12.93px]
     ">
            <div className='w-[137.71px] h-[11.27px] text-[12px] font-semibold mt-3 ms-[3.7px] flex justify-center'><p>SALES OVER TIME</p></div>
            <div className="w-[367.36px] h-[211.12px] rounded-2xl ms-[13.93px] mt-4 ">
                <img src={graph01} className='w-[367.36px] h-[211.12px] rounded-2xl ' alt=""  />
            </div>
        </div>
    
        {/* card 3 */}
       <div className="w-[353px] 
    h-auto lg:h-[337.65px] 
    bg-white rounded-2xl 
    mt-3 mb-3 lg:mt-0 lg:mb-0 
    lg:ms-[11.17px]
    ">
    
        {/* Header */}
        <div className="w-[315px] h-[12px] ms-[14.32px] mt-[20.77px] flex justify-between items-center">
            <p className="text-xs tracking-wide">GENERATE REPORTS</p>
            <RiArrowRightUpLine className="text-[#F39C12] text-xl" />
        </div>
    
        <h1 className="ms-[19.2px] mt-[10.15px] font-semibold">
            Select Report Type
        </h1>
    
        {/* Report List */}
        <div className="w-[315px] ms-[21.32px] mt-[10.28px] space-y-[11.94px]">
    
            {/* Item */}
            <div className="flex justify-between items-center">
                <p>Payment Reports</p>
                <div className="w-[16px] h-[16px] bg-[#27AE6040] flex items-center justify-center rounded-sm">
                    <img src={check} className="w-[10px] h-[8px]" alt="" />
                </div>
            </div>
    
            <div className="flex justify-between items-center">
                <p>Older Reports</p>
                <div className="w-[16px] h-[16px] bg-[#27AE6040] rounded-sm"></div>
            </div>
    
            <div className="flex justify-between items-center">
                <p>Inventory Reports</p>
                <div className="w-[16px] h-[16px] bg-[#27AE6040] rounded-sm"></div>
            </div>
    
            <div className="flex justify-between items-center">
                <p>Customer Reports</p>
                <div className="w-[16px] h-[16px] bg-[#27AE6040] rounded-sm"></div>
            </div>
    
            <div className="flex justify-between items-center">
                <p>Delivery Reports</p>
                <div className="w-[16px] h-[16px] bg-[#27AE6040] rounded-sm"></div>
            </div>
    
            <div className="flex justify-between items-center">
                <p>Promotion Reports</p>
                <div className="w-[16px] h-[16px] bg-[#27AE6040] rounded-sm"></div>
            </div>
    
        </div>
    
        {/* Buttons */}
        <div className="w-[320px] h-[32px] flex justify-between ms-[16px] mt-[18px]">
            <button className="w-[155px] h-[32px] bg-white border border-[#F39C12] text-[#F39C12] rounded-md">
                Share
            </button>
            <button className="w-[155px] h-[32px] bg-[#F39C12] text-white rounded-md">
                Download
            </button>
        </div>
    
    </div>
    
    
        {/* card 4 */}
        <div className="w-[396.18px] 
    h-auto lg:h-[210.79px] 
    bg-white rounded-2xl 
    mt-3 lg:mt-[-50px] 
    lg:ms-[16.76px] 
    relative p-5
    ">
    
      {/* Title */}
      <p className="text-[14px] font-semibold text-[#2E2E2E] tracking-wide">
        ORDER STATUS
      </p>
    
      <div className="flex mt-4">
    
        {/* Pie Chart Section */}
        <div className="relative w-[120px] h-[120px]">
    
          {/* Pie (Conic Gradient) */}
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `
                conic-gradient(
                  #6C5DD3 0% 25%,       
                  #6FCF97 25% 55%,      
                  #F2B653 55% 75%,      
                  #EB5757 75% 85%,      
                  #EACB63 85% 100%      
                )
              `,
            }}
          />
    
          {/* Inner Hole */}
          <div className="absolute inset-[30px] bg-white rounded-full"></div>
    
          {/* 25% Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-[12px] font-semibold absolute right-[22px] top-[45px] mr-[-12.03px] mt-[-20px]">
              25%
            </span>
          </div>
        </div>
    
        {/* Connector Line */}
        <div className="relative ml-4">
          <div className="absolute top-[42px] left-0 w-[55px] h-[2px] ms-[-20px] mt-[-10px]  bg-[#6C5DD3]"></div>
          <div className="absolute top-[42px] left-[55px] w-[2px] h-[40px] ms-[-20px] mt-[-10px] bg-[#6C5DD3]"></div>
          <div className="absolute top-[58px] left-[150px] w-[40px] h-[2px] bg-[#6C5DD3] ms-[-115px] mt-[14px] "></div>
    
        </div>
    
        {/* Legend */}
        <div className="flex flex-col gap-3 ml-16 text-[13px]">
    
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <div className="w-3 h-3 rounded-full bg-[#EACB63]"></div>
            Pending
          </div>
    
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <div className="w-3 h-3 rounded-full bg-[#F2B653]"></div>
            Processing
          </div>
    
          <div className="flex items-center gap-2 text-[#2E2E2E] font-medium">
            <div className="w-3 h-3 rounded-full bg-[#6C5DD3]"></div>
            Out For Delivery
          </div>
    
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <div className="w-3 h-3 rounded-full bg-[#6FCF97]"></div>
            Delivered
          </div>
    
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <div className="w-3 h-3 rounded-full bg-[#EB5757]"></div>
            Cancelled
          </div>
    
        </div>
    
      </div>
    </div>
    
    
        {/* card 5 */}
        <div className=" lg:w-[383.48px] 
    h-auto lg:h-[210.79px] 
    bg-white rounded-2xl 
    mt-3 lg:mt-[-50px] 
    lg:ms-[8.57px]" >
            <div className="w-[full] h-[19.68px] flex justify-between mt-[26px]">
                <p className='ms-[20px]'>DELIVERY AGENTS</p>
                <p className='text-[#27AE60] mr-[43.39px]'>View All</p>
            </div>
            <div className="w-[full] h-[142.2px] ms-[8.77px] mt-[13.57px]">
                <div className="w-[365.06px] h-[43px] bg-[#27AE6017] rounded-2xl flex justify-between items-center">
                    <p className='text-[#27AE60] ms-[8.36px]'>Total Agents</p>
                    <p className='mr-[15.27px]'>30</p>
                </div>
                <div className="w-[365.06px] h-[43px] bg-[#27AE6017] rounded-2xl mt-[4.3px] flex justify-between items-center">
                    <p className='text-[#27AE60] ms-[9.11px]'>Active Agents</p>
                    <p className='mr-[15.27px]'>20</p>
                </div>
                <div className="w-[365.06px] h-[43px] bg-[#27AE6017] rounded-2xl mt-[4.3px] flex justify-between items-center">
                    <p className='text-[#27AE60] ms-[11.79px]'>On-Time Delivery</p>
                    <p className='mr-[10.31px]'>95%</p>
                </div>
            </div>
        </div>
    
        {/* card 6 */}
        <div className=" w-[353px] h-[156.56px] mt-[10.09px] bg-white rounded-2xl flex justify-center flex-col ms-[11.17px]">

  {/* Header */}
  <div className="ms-[10px] w-[329px] flex justify-between items-center mb-4">
    <p className="text-sm font-semibold text-gray-700">
      SUPPORT TICKETS
    </p>
    <p className="text-[#27AE60] text-sm font-medium cursor-pointer">
      View All
    </p>
  </div>

  {/* Ticket Item */}
  <div className="flex justify-between w-[329px] ms-[10px] items-center">
    
    {/* Left */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-8 bg-[#EEF0EF] rounded-lg 
                      flex justify-center items-center">
        <img src={card6} alt="" className="w-4 h-4 object-contain" />
      </div>

      <div>
        <p className="text-xs text-[#8F8F8F]">
          #101 2023-10-01
        </p>
        <p className="text-sm font-medium text-[#1E1E1E]">
          John Doe / Order
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="w-10 h-8 bg-[#F39C1233] rounded-full 
                    flex justify-center items-center">
      <BsArrowUpRight />
    </div>
  </div>

  <hr className="my-4 border-[#DED4D4]" />

  {/* Second Ticket */}
  <div className="flex justify-between w-[329px] ms-[10px]  items-center">
    
    <div className="flex items-center gap-3">
      <div className="w-10 h-8 bg-[#EEF0EF] rounded-lg 
                      flex justify-center items-center">
        <img src={card6} alt="" className="w-4 h-4 object-contain" />
      </div>

      <div>
        <p className="text-xs text-[#8F8F8F]">
          #111 2023-10-01
        </p>
        <p className="text-sm font-medium text-[#1E1E1E]">
          Alen John / Order
        </p>
      </div>
    </div>

    <div className="w-10 h-8 bg-[#F39C1233] rounded-full 
                    flex justify-center items-center">
      <BsArrowUpRight />
    </div>
  </div>

</div>

    
             </div>
    
             {/*cards 2  */}
    
    <div className="w-[1145.28px] flex flex-col lg:flex-row  lg:gap-6 ">

  {/* LEFT CARD */}
<div className="w-full ms-[4px]
                max-w-[350px] 
                sm:max-w-[420px] 
                lg:max-w-[505.92px] 
               bg-white
                rounded-2xl 
                mt-4 
                lg:mt-[16.19px]
                lg:ms-[21.95px] 
                h-auto 
                lg:h-[368.13px] 
                p-4 
                flex flex-col 
                mx-auto">

  {/* Title */}
  <h1 className="font-semibold 
                 text-sm 
                 sm:text-base 
                 lg:text-lg
                 mt-2 
                 lg:mt-[27.32px] 
                 lg:ms-[16.8px]">
    Inventory Levels
  </h1>

  {/* Chart Section */}
  <div className="mt-4 
                  lg:mt-[24.24px] 
                  w-full 
                  flex 
                  justify-center">
    <img
      src={graph02}
      alt="Inventory Graph"
      className="w-full 
                 max-h-[180px] 
                 sm:max-h-[220px] 
                 lg:max-h-none
                 object-contain"
    />
  </div>

</div>




<div className="w-full ms-[-5px] mt-2 lg:mt-4
                max-w-[360px] 
                sm:max-w-[480px] 
                lg:max-w-[626.24px] 
                mx-auto 
                px-3 sm:px-0">

  {/* BUTTON TABS */}
  <div className="flex 
                  flex-col 
                  sm:flex-row 
                  gap-2 
                  sm:gap-4 
                  mb-3">

    <div className="px-4 py-2 
                    text-xs sm:text-sm 
                    rounded-xl 
                    border border-[#27AE60] 
                    bg-[#27AE6040] 
                    text-center">
      RECENT ORDERS
    </div>

    <div className="px-4 py-2 
                    text-xs sm:text-sm 
                    rounded-xl 
                    border 
                    text-center">
      ON-TIME DELIVERY
    </div>

    <div className="px-4 py-2 
                    text-xs sm:text-sm 
                    rounded-xl 
                    border 
                    text-center">
      DELIVERY UPDATES
    </div>

  </div>

  {/* TABLE CARD */}
  <div className="bg-white 
                  rounded-2xl 
                  p-3 sm:p-6">

    {/* Mobile Title */}
    <div className="lg:hidden text-sm font-semibold mb-3">
      Recent Orders
    </div>

    {/* Desktop Header */}
    <div className="hidden lg:grid grid-cols-4 font-semibold mb-4">
      <p>Order Id</p>
      <p>Name</p>
      <p className="text-right">Amount</p>
      <p className="text-right">Status</p>
    </div>

    {/* ROWS */}
    <div className="space-y-3 text-xs sm:text-sm">

      {/* Row 1 */}
      <div className="grid grid-cols-4 items-center border-b pb-2">
        <p>#123655</p>
        <p>John Doe</p>
        <p className="text-right font-medium">₹2500</p>
        <div className="flex justify-end">
          <img src={status01} className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-4 items-center border-b pb-2">
        <p>#123655</p>
        <p>John Doe</p>
        <p className="text-right font-medium">₹3000</p>
        <div className="flex justify-end">
          <img src={status02} className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-4 items-center border-b pb-2">
        <p>#123655</p>
        <p>John Doe</p>
        <p className="text-right font-medium">₹250</p>
        <div className="flex justify-end">
          <img src={status03} className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-4 items-center border-b pb-2">
        <p>#123655</p>
        <p>John Doe</p>
        <p className="text-right font-medium">₹500</p>
        <div className="flex justify-end">
          <img src={status04} className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-4 items-center">
        <p>#123655</p>
        <p>John Doe</p>
        <p className="text-right font-medium">₹10,000</p>
        <div className="flex justify-end">
          <img src={status01} className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>

    </div>

  </div>

</div>




</div>


        
    
    
          </div>
    
          </div>
    </div>
   



    </>
  )
}

export default Dashboard