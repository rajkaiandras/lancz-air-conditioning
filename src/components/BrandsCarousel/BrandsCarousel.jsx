import React, { useState, useEffect } from 'react';

// brand logos
import { BrandLogo } from '../BrandLogos/BrandLogos.jsx';

// swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// styles
import './BrandsCarousel.css';

// database
const brandsDB = [
  'cooper-and-hunter',
  'daikin',
  'fisher',
  'fujitsu',
  'gree',
  'panasonic',
  'korel',
  'lg',
  'midea',
  'hisense',
  'vivax',
];

export const BrandsCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // window resize handler
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className="BrandsCarousel">
      <div className="brand-carousel-inner">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={
            windowWidth <= 480
              ? 3
              : windowWidth <= 768
              ? 5
              : windowWidth <= 1024
              ? 6
              : 7
          }
          spaceBetween={32}
          className="mySwiper"
        >
          {brandsDB.map((brand, index) => {
            return (
              <SwiperSlide key={index}>
                <BrandLogo id={brand} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
