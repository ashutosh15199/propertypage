import React from 'react'
import image1 from '../assets/image/hot-location/1.webp'
import image2 from '../assets/image/hot-location/2.webp'
import image3 from '../assets/image/hot-location/3.webp'
import backgroundImage from '../assets/image/backgroundimage/2.jpg'

const HotLocation = () => {
  const cities = [
    { id: 1, name: "PUNE EAST", image: image1 },
    { id: 2, name: "PUNE CENTRAL", image: image2 },
    { id: 3, name: "PUNE WEST", image: image3 },
  ];

  return (
    <div 
    className="relative bg-cover bg-center py-16 px-5"
    style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    {/* Semi-transparent Overlay */}
    <div className="absolute inset-0 bg-[#DAD8D5] bg-opacity-50 "></div>

      <div className="relative max-w-6xl mx-auto text-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Hot Location</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div key={city.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotLocation;
