import React from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
import logo from '../assets/image/logo/1.png'

const Footer = () => {
  return (
    <footer className='text-gray-900 bg-white mt-10'>
      <div className='max-w-6xl mx-auto px-5 flex flex-wrap justify-between gap-8'>
        {/* Logo & Location */}
        <div className='flex flex-col items-start'>
          <img src='' alt='' className='w-40 mb-3' />
        </div>

        {/* Contact Us */}
        <div className='flex items-start space-x-3'>
          {/* Icon on the left */}
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#374151] text-gray-100 text-xl'>
            <FaPhoneAlt />
          </div>

          {/* Text content on the right */}
          <div className='flex flex-col'>
            {/* Contact Us heading */}
            <h3 className='text-xl font-semibold text-[#374151]'>Contact Us</h3>

            {/* Phone number & email in a column under "Contact Us" */}
            <p className='text-[#374151] text-sm mt-1'>+91 12345 67890</p>
            <span className='text-[#374151] text-sm'>info@example.com</span>
          </div>
        </div>

        {/* Location */}
        <div className='flex items-start space-x-3'>
          {/* Icon on the left */}
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#374151] text-gray-100 text-xl'>
            <FaMapMarkerAlt />
          </div>

          {/* Text content on the right */}
          <div className='flex flex-col'>
            {/* Location heading */}
            <h3 className='text-xl font-semibold text-[#374151]'>Location</h3>

            {/* Address details below in smaller text */}
            <p className='text-[#374151] text-sm'>
              610-613, 6th Floor Vipul Trade Centre,<br/> Sector 48, Gurugram,
              Haryana 122018
            </p>
          </div>
        </div>

        {/* Follow Us (Social Media) */}
        <div className='flex flex-col items-start'>
          <h3 className='text-xl font-semibold mb-3 text-[#374151]'>
            Follow Us
          </h3>
          <div className='flex space-x-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#374151] text-white text-2xl'>
                <FaFacebook />
              </div>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#374151] text-white text-2xl'>
                <FaTwitter />
              </div>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#374151] text-white text-2xl'>
                <FaInstagram />
              </div>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#374151] text-white text-2xl'>
                <FaLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-black text-gray-300 text-[10px] mt-6 border-t border-gray-300 pt-4">
     <p> Marketed By - Authorised Channel Partner | Haryana RERA Regd NO. RC/ REA/HARERA/GGM|2019|279,<br/>
This is not the official website of developer property, it belongs to authorised channel partners for information purposes only. All rights for logo & images are reserved to the developer. Thank you for visiting our website. This disclaimer ("Disclaimer") is applicable to this website and all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any qualification or limitation. || All Rights Reserved CopyRight © 2024</p>
<br/>
<span className='text-lg'>Disclaimer and Privacy Policy</span>
      </div>
    </footer>
  )
}

export default Footer
