import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import images
import Banner1Large from "../assets/image/banner/Banner-1.webp";
import Banner2Large from "../assets/image/banner/Banner-1.webp";
import Banner3Large from "../assets/image/banner/Banner-1.webp";

import Banner1Small from "../assets/image/banner/banner.webp";
import Banner2Small from "../assets/image/banner/banner.webp";
import Banner3Small from "../assets/image/banner/banner.webp";

const Banner = () => {
  const banners = [
    { large: Banner1Large, small: Banner1Small },
    { large: Banner2Large, small: Banner2Small },
    { large: Banner3Large, small: Banner3Small },
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay, Mousewheel]}
        spaceBetween={3}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => `<span class="${className}"></span>`, // Hide numbers under dots
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        mousewheel={{ forceToAxis: true }}
        className="overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.large}
              alt={`Banner ${index + 1}`}
              className="hidden md:block w-full h-[900px] object-cover"
            />
            <img
              src={banner.small}
              alt={`Banner ${index + 1}`}
              className="block md:hidden w-full h-[600px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
