import React, { useState, useEffect } from 'react';

// components
import { Logo } from '../Logos/Logos.jsx';
/* import { Icon } from '../Icons/Icons.jsx'; */

// swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// styles
import './HomeCarousel.css';

// database
const swiperSlideDB = [
  {
    slogan: 'Mert bennünk megbízhat',
    title: 'Klímák szakszerű telepítése, karbantartása és forgalmazása',
    image: 'air-conditioner',
  },
  {
    slogan: 'Mert bennünk megbízhat',
    title: 'Hőszivattyúk telepítése, karbantartása és beszerzése',
    image: 'heat-pump',
  },
];

export const HomeCarousel = () => {
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
    <div className="HomeCarousel">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        navigation
        pagination
        autoplay
        effect={'fade'}
        speed={3000}
        slidesPerView={1}
        loop
      >
        {swiperSlideDB.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slide">
                {windowWidth < 640 ? (
                  <Logo id="full-name" />
                ) : (
                  <Logo id="monogram" />
                )}
                <h3 className="slide__slogan">{slide.slogan}</h3>
                <h1 className="slide__title">{slide.title}</h1>
                <a className="slide__contact-container" href="tel:+36302965944">
                  <div className="btn btn--filled" href="tel:+36302965944">
                    Hívjon most
                  </div>
                  <div className="contact__phone-number">
                    {/* <Icon id="phone-call" /> */}
                    +36 (30) 296 5944
                  </div>
                </a>
              </div>
              <div className={`slide-bg ${slide.image}`}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
