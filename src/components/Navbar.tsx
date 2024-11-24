'use client'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Logo</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-600">關於我們</a>
            <a href="#services" className="hover:text-gray-600">服務</a>
            <a href="#restaurant" className="hover:text-gray-600">餐廳</a>
            <a href="#investors" className="hover:text-gray-600">投資者</a>
            <a href="#contact" className="hover:text-gray-600">聯絡我們</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 