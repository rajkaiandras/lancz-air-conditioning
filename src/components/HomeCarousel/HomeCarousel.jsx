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
import livingRoom from '../../assets/images/home-carousel-living-room-1920x1080.webp';
import heatPump from '../../assets/images/home-carousel-heat-pump-1440x768.webp';

// database
const swiperSlideDB = [
  {
    slogan: 'Mert bennünk megbízhat',
    title: 'Klímák szakszerű telepítése, karbantartása és forgalmazása',
    image: livingRoom,
    alt: 'air conditioner in living room',
  },
  {
    slogan: 'Mert bennünk megbízhat',
    title: 'Hőszivattyúk telepítése, karbantartása és beszerzése',
    image: heatPump,
    alt: 'heat pump',
  },
];

export const HomeCarousel = () => {
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
                <Logo id="full-name" />
                <h3 className="slide__slogan">{slide.slogan}</h3>
                <h1 className="slide__title">{slide.title}</h1>
                <a className="slide__contact-container" href="tel:+36302965944">
                  <div className="btn btn--filled" href="tel:+36302965944">
                    Hívjon most
                  </div>
                  <div className="contact__phone-number">
                    <Icon id="phone-call" />
                    +36 (30) 296 5944
                  </div>
                </a>
              </div>
              <img className="slide-bg" src={slide.image} alt={slide.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
