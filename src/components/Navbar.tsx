'use client'
import React, { useState } from 'react'
// 移除未使用的導入
// import { useState } from 'react'
// import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full bg-[#f6f5f1] z-50 shadow-md">
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
          
          {/* 桌面選單 */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="hover:text-gray-600"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              首頁
            </a>
            <a href="#pain" className="hover:text-gray-600">解決痛點</a>
            <a href="#about" className="hover:text-gray-600">關於克萊爾</a>
            <a href="#subscribe" className="hover:text-gray-600">訂閱我</a>
          </div>
          
          {/* 漢堡選單按鈕 */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* 行動裝置選單 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="hover:text-gray-600"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                首頁
              </a>
              <a 
                href="#pain" 
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                解決痛點
              </a>
              <a 
                href="#about" 
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                關於克萊爾
              </a>
              <a 
                href="#subscribe" 
                className="hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                訂閱我
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 