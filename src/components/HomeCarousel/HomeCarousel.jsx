// components
import { Logo } from '../Logos/Logos.jsx';
import { Icon } from '../Icons/Icons.jsx';

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

// assets
import swiperSlideImage1 from '../../assets/images/hero-image-1440x768-unsplash.com_spacejoy.webp';
import swiperSlideImage2 from '../../assets/images/heat-pump-1440x768-iStock-1407175869.webp';

// database
const swiperSlideDB = [
  {
    slogan: 'Mert bennünk megbízhat',
    title: 'Klímák szakszerű telepítése, karbantartása és forgalmazása',
    image: swiperSlideImage1,
  },
  {
    slogan: 'Mert bennünk megbízhat',
    title: 'Hőszivattyúk telepítése, karbantartása és beszerzése',
    image: swiperSlideImage2,
  },
];

export const HomeCarousel = () => {
  return (
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
              <Logo id="monogram" />
              <h3 className="slide__slogan">{slide.slogan}</h3>
              <h1 className="slide__title">{slide.title}</h1>
              <a className="slide__contact-container" href="tel:+36302965944">
                <div className="btn btn--outline" href="tel:+36302965944">
                  Hívjon most
                </div>
                <div className="contact__phone-number">
                  <Icon id="phone-call" />
                  +36 (30) 296 5944
                </div>
              </a>
            </div>
            <img className="slide-bg" src={slide.image} alt="marvel heroes" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
