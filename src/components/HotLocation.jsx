import React from 'react'
import image1 from '../assets/image/1.webp'
import image2 from '../assets/image/2.webp'
import image3 from '../assets/image/3.webp'

const HotLocation = () => {
    const cities = [
        { id: 1, name: "PUNE EAST", image: image1 },
        { id: 2, name: "PUNE CENTRAL", image: image2 },
        { id: 3, name: "PUNE WEST", image: image3},
      ];
    
      return (
        <div className="max-w-6xl mx-auto py-10 px-5">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hot Location</h2>
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
      );
}

export default HotLocation