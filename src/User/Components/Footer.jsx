import React from 'react'
import logo2 from '../../assets/logo2.png'
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
   <footer className="w-full bg-[#2FA55A] text-white px-6 md:px-16 py-12">

  <div className="max-w-[1200px] mx-auto">

    {/* Top Section */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

      {/* Left Section */}
      <div className="flex flex-col gap-6 md:max-w-[300px]">
        <img
          src={logo2}
          alt="Pokak Logo"
          className="w-[220px] object-contain"
        />

        <div className="flex items-center gap-6 text-xl">
          <FaInstagram className="cursor-pointer hover:opacity-80" />
          <FaFacebookF className="cursor-pointer hover:opacity-80" />
          <FaXTwitter className="cursor-pointer hover:opacity-80" />
          <FaLinkedinIn className="cursor-pointer hover:opacity-80" />
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Orders</li>
            <li className="hover:underline cursor-pointer">Track Order</li>
            <li className="hover:underline cursor-pointer">Offers</li>
            <li className="hover:underline cursor-pointer">Cart</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Contact Support</li>
            <li className="hover:underline cursor-pointer">
              Cancellation & Refund Policies
            </li>
            <li className="hover:underline cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:underline cursor-pointer">
              Privacy & Policies
            </li>
          </ul>
        </div>

      </div>

    </div>

    {/* Bottom Section */}
    <div className="mt-12 border-t border-white/30 pt-6 text-sm text-center md:text-left">
      © 2025 Pokak Technologies Pvt Ltd
    </div>

  </div>

</footer>

  )
}

export default Footer