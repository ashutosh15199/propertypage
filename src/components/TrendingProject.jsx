import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
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
import { FaMapMarkerAlt } from 'react-icons/fa'
// import { FaMapMarkerAlt } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm'
import {form} from '../data'
// Property Data
const properties = {
  'Pune East': [
    {
      id: 1,
      image: image1,
      title: 'Lodha Giardino',
      location: 'kharadi',
      bhk: '3 & 4 BHK',
      price: '₹ 2.07 Cr*'
    },
    {
      id: 2,
      image: image2,
      title: 'Gera’s Island Of Joy',
      location: 'Kharadi',
      bhk: '2, 3 & 4 BHK',
      price: '₹ 83.90 Lacs*'
    },
    {
      id: 3,
      image: image3,
      title: 'Aditya Birla Real Estate',
      location: 'Wellesley Road',
      bhk: '1, 2, 3 & 4 BHK',
      price: '₹ 0.95 Cr*'
    },
    {
      id: 4,
      image: image4,
      title: 'Majestique Evolvus',
      location: 'Kharadi',
      bhk: '2, 3 & 4 BHK',
      price: '₹ 1.26 Cr*'
    },
    {
      id: 5,
      image: image5,
      title: 'Godrej SkyGreens',
      location: 'Kharadi',
      bhk: '1, 2 & 3 BHK',
      price: '₹ On Request*'
    },
    {
      id: 6,
      image: image6,
      title: 'Mantra - One Residences',
      location: 'Magarpatta',
      bhk: '3 & 4 BHK',
      price: '₹ On Request*'
    },
    {
      id: 7,
      image: image6,
      title: 'Mantra Riverside',
      location: 'Balewadi',
      bhk: '2, 3 & 4 BHK',
      price: '₹ 1.26 Cr*'
    },
    {
      id: 8,
      image: image6,
      title: 'Mantra Joypin',
      location: 'Kharadi',
      bhk: '2 & 3 BHK',
      price: '₹ 1.15 Cr*'
    },
  ],
  'Pune Central': [
    {
      id: 1,
      image: image8,
      title: 'Coming Soon',
      location: '...',
      bhk: '... BHK',
      price: '₹ ... Cr'
    },
    {
      id: 2,
      image: image9,
      title: 'Coming Soon',
      location: '...',
      bhk: '... BHK',
      price: '₹ ... Cr'
    },
    {
      id: 3,
      image: image10,
      title: 'Coming Soon',
      location: '...',
      bhk: '... BHK',
      price: '₹ ... Cr'
    },
    {
      id: 4,
      image: image11,
      title: 'Coming Soon',
      location: '...',
      bhk: '... BHK',
      price: '₹ ... Cr'
    },
    {
      id: 5,
      image: image12,
      title: 'Coming Soon',
      location: '...',
      bhk: '... BHK',
      price: '₹ ... Cr'
    },
    {
      id: 6,
      image: image13,
      title: 'Coming Soon',
      location: '...',
      bhk: '... BHK',
      price: '₹ ... Cr'
    }
  ],
  'Pune West': [
    {
      id: 1,
      image: image14,
      title: 'Godrej Evergreen Square',
      location: 'Hinjawadi',
      bhk: '1, 2 & 3 BHK',
      price: '₹ 59.99 Lacs*'
    },
    {
      id: 2,
      image: image15,
      title: 'Shapoorji  Golfland',
      location: 'Bavdhan',
      bhk: '2, 3 & 4 BHK',
      price: '₹ 1.26 Cr*'
    },
    {
      id: 3,
      image: image16,
      title: 'Shapoorji Wildernest ',
      location: 'Hinjawadi',
      bhk: '3 & 4 BHK',
      price: '₹ 1.79 Cr*'
    },
    {
      id: 4,
      image: image17,
      title: 'Gera’s Joy on the Tree Tops',
      location: 'Hinjawadi',
      bhk: '2 & 3 BHK',
      price: '₹ On Request*'
    },
    {
      id: 5,
      image: image18,
      title: 'Codename Trendy West',
      location: 'Baner',
      bhk: '2 & 3 BHK',
      price: '₹ 3.8 Cr'
    },
    {
      id: 6,
      image: image19,
      title: 'villas palladio',
      location: 'Balewadi',
      bhk: '3 & 4 BHK',
      price: '₹ On Request* '
    }
  ]
}

const TrendingProject = () => {
  const [selectedCity, setSelectedCity] = useState('Pune East')
  const [isFormOpen, setIsFormOpen] = useState(null)
  const swiperRef = useRef(null)

  // Open Form and Blur Background
  const handleEnquireClick = () => {
    setIsFormOpen(true)
    if (swiperRef.current) swiperRef.current.autoplay.stop() // Stop autoplay
  }

  // Close Form and Restore Background
  const handleCloseForm = () => {
    setIsFormOpen(false)
    if (swiperRef.current) swiperRef.current.autoplay.start() // Resume autoplay
  }

  return (
    <>
      <div
        className=' bg-cover bg-center p-10'
      // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
          Trending Projects
        </h2>

        {/* Location Buttons */}
        <div className='flex justify-center space-x-4 mb-6'>
          {Object.keys(properties).map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-6 py-2 text-white text-[14px] leading-[20px] md:font-semibold rounded-lg transition whitespace-nowrap ${selectedCity === city
                ? 'bg-gray-600 shadow-lg transform scale-110'
                : 'bg-gray-500 hover:bg-gray-700'
                }`}
            >
              {city}
            </button>

          ))}
        </div>

        {/* Property Slider */}
        <div className={`transition-all duration-300 ${isFormOpen ? 'blur-md pointer-events-none' : ''}`}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-5xl mx-auto"
          >
             {properties[selectedCity].map(property => (
              <SwiperSlide key={property.id}>
                <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white'>
                  <img
                    className='w-full h-60 object-cover'
                    src={property.image}
                    alt={property.title}
                  />
                  <h2 className='flex items-center justify-center text-lg font-bold text-gray-800 mt-3'>
                    {property.title}
                  </h2>
                  <div className='p-4'>
                    <div className='flex items-center gap-1 text-gray-500 text-xl'>
                      <FaMapMarkerAlt className='text-[14px]' />
                      <p className='text-sm text-gray-500'>{property.location}</p>
                    </div>

                    <div className='flex justify-between items-center gap-1'>
                      <p className='text-sm text-gray-500 ml-1'>
                        {property.price}
                      </p>
                      <button
                        className='bg-gray-500 text-white px-4 py-1 w-[120px] rounded-lg text-sm'
                        onClick={() => handleEnquireClick(property.id)}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
        {isFormOpen && (
          <div className='fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50'>


            {/* Your Form Fields Here */}
            <EnquiryForm onClose={handleCloseForm} form={form} />


          </div>
        )}
      </div>
    </>
  )
}
export default TrendingProject
