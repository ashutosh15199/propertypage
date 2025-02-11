import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import backgroundImage from '../assets/image/backgroundimage/1.webp'
import { FaMapMarkerAlt } from 'react-icons/fa'
import EnquiryForm from './EnquiryForm'

// Importing property images
import image1 from '../assets/image/trending-project/pune-east/1.webp'
import image2 from '../assets/image/trending-project/pune-east/2.webp'
import image3 from '../assets/image/trending-project/pune-east/3.webp'
import image4 from '../assets/image/trending-project/pune-east/4.webp'
import image5 from '../assets/image/trending-project/pune-east/5.webp'
import image6 from '../assets/image/trending-project/pune-east/6.webp'

// Property Data
const properties = {
  'Pune East': [
    { id: 1, image: image1, title: 'Luxury Apartment', location: 'Pune East', bhk: '2 BHK', price: '₹ 1.5 Cr' },
    { id: 2, image: image2, title: 'Modern Villa', location: 'Pune East', bhk: '3 BHK', price: '₹ 2.8 Cr' },
    { id: 3, image: image3, title: 'Cozy Condo', location: 'Pune East', bhk: '1 BHK', price: '₹ 90 L' },
    { id: 4, image: image4, title: 'Spacious Flat', location: 'Pune East', bhk: '2.5 BHK', price: '₹ 1.8 Cr' },
    { id: 5, image: image5, title: 'Elegant Duplex', location: 'Pune East', bhk: '4 BHK', price: '₹ 3.2 Cr' },
    { id: 6, image: image6, title: 'Penthouse Suite', location: 'Pune East', bhk: '5 BHK', price: '₹ 5 Cr' }
  ]
};

const TrendingProject = () => {
  const [selectedCity, setSelectedCity] = useState('Pune East');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const swiperRef = useRef(null);

  // Open Form and Blur Background
  const handleEnquireClick = () => {
    setIsFormOpen(true);
    if (swiperRef.current) swiperRef.current.autoplay.stop(); // Stop autoplay
  };

  // Close Form and Restore Background
  const handleCloseForm = () => {
    setIsFormOpen(false);
    if (swiperRef.current) swiperRef.current.autoplay.start(); // Resume autoplay
  };

  return (
    <div className='relative bg-cover bg-center p-10 mt-10' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Trending Projects</h2>

      {/* Location Buttons */}
      <div className='flex justify-center space-x-4 mb-6'>
        {Object.keys(properties).map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-6 py-2 text-white font-semibold rounded-lg transition ${
              selectedCity === city ? 'bg-gray-600 shadow-lg transform scale-110' : 'bg-gray-500 hover:bg-gray-700'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Main Content (Blur when form is open) */}
      <div className={`transition-all duration-300 ${isFormOpen ? 'blur-md pointer-events-none' : ''}`}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className='w-full max-w-5xl mx-auto'
        >
          {properties[selectedCity].map(property => (
            <SwiperSlide key={property.id}>
              <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white'>
                <img className='w-full h-60 object-cover' src={property.image} alt={property.title} />
                <h2 className='text-lg font-bold text-center'>{property.title}</h2>
                <button onClick={handleEnquireClick} className="bg-blue-500 text-white p-2 rounded-lg mt-2">Enquire Now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Enquiry Form (Shown when isFormOpen is true) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
          {/* <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full opacity-100 transition-opacity duration-300"> */}
            {/* <h2 className="text-xl font-bold mb-4">Enquiry Form</h2> */}
            
            {/* Your Form Fields Here */}
            <EnquiryForm onClose={handleCloseForm} />


            {/* Buttons */}
            {/* <div className="flex justify-between mt-4">
              <button onClick={handleCloseForm} className="bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
              <button onClick={handleCloseForm} className="bg-green-500 text-white px-4 py-2 rounded-lg">Submit</button>
            </div> */}
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default TrendingProject;
