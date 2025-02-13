import React, { useState } from 'react'
import image from '../assets/image/logo/1.png'

const NavManu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = dropdown => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className='bg-white fixed w-full top-0 left-0 z-50 shadow-md text-black'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between sm:justify-start ml-0  sm:ml-[100px]  p-4 md:p-2 relative'>
        {/* Logo */}
        <a href='#' className='flex items-center space-x-3'>
          <img src={image} className='h-15 w-[150px]' alt='Logo' />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden z-50 p-2 w-10 h-10 text-black rounded-lg hover:bg-gray-200 focus:ring-2'
        >
          <svg className='w-5 h-5' aria-hidden='true' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`absolute md:relative md:flex flex-col md:flex-row w-full md:w-auto bg-white transition-all duration-300 ${
          isOpen ? 'top-16 left-0 md:h-auto flex' : 'hidden md:flex'
        }`}>
          <ul className='flex flex-col md:flex-row items-center ml-0 md:ml-[150px] 2xl:ml-[300px] mx-auto md:space-x-4 text-center text-black'>
            <li><a href='#' className='block py-2 px-4'>Home</a></li>

            {/* Hot Location Dropdown */}
            <li className='relative'>
              <button onClick={() => toggleDropdown('hot-location')} className='flex items-center py-2 px-4'>
                Hot Location
                <svg className='w-3 h-3 ml-2' fill='none' viewBox='0 0 10 6'>
                  <path stroke='currentColor' strokeWidth='2' d='M1 1l4 4 4-4' />
                </svg>
              </button>
              {openDropdown === 'hot-location' && (
                <>
                  <div className='fixed inset-0 bg-opacity-50 z-40 md:hidden' onClick={() => setOpenDropdown(null)}></div>
                  <div className='absolute left-0 bg-white shadow-lg w-40 rounded-md z-50'>
                    <ul className='py-2 text-sm text-black'>
                      <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>Pune East</a></li>
                      <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>Pune Central</a></li>
                      <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>Pune West</a></li>
                      <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>View More...</a></li>
                    </ul>
                  </div>
                </>
              )}
            </li>

            {/* Top Developer Dropdown */}
            <li className='relative'>
              <button onClick={() => toggleDropdown('top-developer')} className='flex items-center py-2 px-4'>
                Top Developer
                <svg className='w-3 h-3 ml-2' fill='none' viewBox='0 0 10 6'>
                  <path stroke='currentColor' strokeWidth='2' d='M1 1l4 4 4-4' />
                </svg>
              </button>
              {openDropdown === 'top-developer' && (
                <div className='absolute left-0 bg-white shadow-lg w-40 rounded-md'>
                  <ul className='py-2 text-sm text-black'>
                    <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>Mantra</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>Gera</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:bg-gray-100'>Godrej</a></li>
                  </ul>
                </div>
              )}
            </li>

            <li><a href='#' className='block py-2 px-4'>Latest Offer</a></li>
            <li><a href='#' className='block py-2 px-4'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavManu
