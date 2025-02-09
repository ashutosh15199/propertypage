import React,{ useState } from 'react'
import image from '../assets/image/logo/1.png'
const NavManu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = dropdown => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full top-0 left-0 z-50 shadow-md'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between md:justify-center  p-4 relative'>
        {/* Logo */}
        <a href='#' className='flex items-center space-x-3'>
          <img
            src={image}
            className='h-15 w-[150px]'
            alt='Flowbite Logo'
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden z-50 p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative md:flex flex-col md:flex-row w-full md:w-auto  bg-white dark:bg-gray-900 transition-all duration-300 ${
            isOpen ? 'top-16 left-0  md:h-auto flex' : 'hidden md:flex'
          }`}
        >
          <ul className='flex flex-col md:flex-row items-center md:ml-[200px]  mx-auto md:space-x-8 text-center'>
            <li>
              <a
                href='#'
                className='block py-2 px-4 text-gray-900 dark:text-white'
              >
                Home
              </a>
            </li>

            {/* Hot Location Dropdown */}
            <li className='relative'>
              <button
                onClick={() => toggleDropdown('hot-location')}
                className='flex items-center py-2 px-4 text-gray-900 dark:text-white'
              >
                Hot Location
                <svg className='w-3 h-3 ml-2' fill='none' viewBox='0 0 10 6'>
                  <path
                    stroke='currentColor'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {openDropdown === 'hot-location' && (
                <>
                  <div
                    className='fixed inset-0  bg-opacity-50 z-40 md:hidden'
                    onClick={() => setOpenDropdown(null)}
                  ></div>
                  <div className='absolute left-0 bg-white dark:bg-gray-700 shadow-lg w-40 rounded-md md:bg-white z-50'>
                    <ul className='py-2 text-sm text-gray-700 dark:text-gray-400'>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                        >
                          Pune East
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                        >
                          Pune Central
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                        >
                          Pune West
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                        >
                          View More...
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </li>

            {/* Top Developer Dropdown */}
            <li className='relative'>
              <button
                onClick={() => toggleDropdown('top-developer')}
                className='flex items-center py-2 px-4 text-gray-900 dark:text-white'
              >
                Top Developer
                <svg className='w-3 h-3 ml-2' fill='none' viewBox='0 0 10 6'>
                  <path
                    stroke='currentColor'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {openDropdown === 'top-developer' && (
                <div className='absolute md:absolute left-0 bg-white dark:bg-gray-700 shadow-lg w-40 rounded-md'>
                  <ul className='py-2 text-sm text-gray-700 dark:text-gray-400'>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                      >
                        Mantra
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                      >
                        Gera
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'
                      >
                        Godrej
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a
                href='#'
                className='block py-2 px-4 text-gray-900 dark:text-white'
              >
                Latest Offer
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-4 text-gray-900 dark:text-white'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavManu
