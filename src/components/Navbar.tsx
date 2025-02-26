'use client'
import React from 'react'
// 移除未使用的導入
// import { useState } from 'react'
// import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#f6f5f1] z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl font-bold cursor-pointer hover:text-gray-600"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            數位煉金室
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#pain" className="hover:text-gray-600">解決痛點</a>
            <a href="#services" className="hover:text-gray-600">煉金觀點</a>
            <a href="#restaurant" className="hover:text-gray-600">關於克萊爾</a>
            <a href="#investors" className="hover:text-gray-600">資源下載</a>
            <a href="#contact" className="hover:text-gray-600">聯絡克萊爾</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 