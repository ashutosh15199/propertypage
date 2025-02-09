import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import backgroundImage from '../assets/image/backgroundimage/1.webp'

// Importing property images
import image1 from '../assets/image/trending-project/pune-east/1.webp'
import image2 from '../assets/image/trending-project/pune-east/2.webp'
import image3 from '../assets/image/trending-project/pune-east/3.webp'
import image4 from '../assets/image/trending-project/pune-east/4.webp'
import image5 from '../assets/image/trending-project/pune-east/5.webp'
import image6 from '../assets/image/trending-project/pune-east/6.webp'

import image8 from '../assets/image/trending-project/pune-central/1.webp'
import image9 from '../assets/image/trending-project/pune-central/2.webp'
import image10 from '../assets/image/trending-project/pune-central/3.webp'
import image11 from '../assets/image/trending-project/pune-central/4.webp'
import image12 from '../assets/image/trending-project/pune-central/5.webp'
import image13 from '../assets/image/trending-project/pune-central/6.webp'

import image14 from '../assets/image/trending-project/pune-west/1.webp'
import image15 from '../assets/image/trending-project/pune-west/2.webp'
import image16 from '../assets/image/trending-project/pune-west/3.webp'
import image17 from '../assets/image/trending-project/pune-west/4.webp'
import image18 from '../assets/image/trending-project/pune-west/5.webp'
import image19 from '../assets/image/trending-project/pune-west/6.webp'

// Property Data
const properties = {
  Pune: [
    { id: 1, image: image1, title: 'Luxury Apartment' },
    { id: 2, image: image2, title: 'Modern Villa' },
    { id: 3, image: image3, title: 'Cozy Condo' },
    { id: 4, image: image4, title: 'Spacious Flat' },
    { id: 5, image: image5, title: 'Elegant Duplex' },
    { id: 6, image: image6, title: 'Penthouse Suite' }
  ],
  Mumbai: [
    { id: 1, image: image8, title: 'Beachfront Villa' },
    { id: 2, image: image9, title: 'High-Rise Apartment' },
    { id: 3, image: image10, title: 'Downtown Loft' },
    { id: 4, image: image11, title: 'City Penthouse' },
    { id: 5, image: image12, title: 'Luxury Townhouse' },
    { id: 6, image: image13, title: 'Skyscraper Condo' }
  ],
  Bengaluru: [
    { id: 1, image: image14, title: 'Tech Park Condo' },
    { id: 2, image: image15, title: 'Suburban Villa' },
    { id: 3, image: image16, title: 'Greenfield Home' },
    { id: 4, image: image17, title: 'Lakeview Apartment' },
    { id: 5, image: image18, title: 'Modern Bungalow' },
    { id: 6, image: image19, title: 'Luxury Flat' }
  ]
}

const TrendingProject = () => {
  const [selectedCity, setSelectedCity] = useState('Pune')

  return (
    <div
      className='relative bg-cover bg-center p-10 mt-10'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Location Buttons */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Trending Projects</h2>
      <div className='flex justify-center space-x-4 mb-6'>
        {Object.keys(properties).map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-6 py-2 text-white font-semibold rounded-lg transition ${
              selectedCity === city
                ? 'bg-gray-600 shadow-lg transform scale-110'
                : 'bg-gray-500 hover:bg-gray-700'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Property Slider */}
      <div className='relative'>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className='w-full max-w-5xl mx-auto'
        >
          {properties[selectedCity].map(property => (
            <SwiperSlide key={property.id}>
              <div className='relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
                <img
                  src={property.image}
                  alt={property.title}
                  className='w-full h-56 object-cover'
                />
                {/* Title placed below the image */}
                <div className='p-4 text-center bg-gray-500'>
                  <span className='text-gray-900 font-bold text-lg'>
                    {property.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='hidden swiper-button-next'></div>
          <div className='hidden swiper-button-prev'></div>
        </Swiper>
      </div>
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  )
}

export default TrendingProject
