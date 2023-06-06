import React, { useRef, useState } from 'react';

// brand logos
import { BrandLogo } from '../../components/BrandLogos/BrandLogos';

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
  return (
    <section className="BrandsCarousel">
      <div className="brand-carousel-inner">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={5}
          spaceBetween={64}
          className="mySwiper"
        >
          {brandsDB.map((brand, index) => {
            return (
              <SwiperSlide>
                <BrandLogo id={brand} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
