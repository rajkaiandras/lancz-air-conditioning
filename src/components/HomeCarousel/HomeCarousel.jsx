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
    title: 'Star Lord',
    subtitle:
      'Peter Quill journeys through space as the leader of the Guardians of the Galaxy',
    image: swiperSlideImage1,
  },
  {
    title: 'Avengers',
    subtitle: 'Earths mightiest heroes fight together as a team',
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
            <div className="slide-content" id="section-home">
              <h1 className="slide-title">{slide.title}</h1>
              <h3 className="slide-subtitle">{slide.subtitle}</h3>
            </div>
            <img className="slide-bg" src={slide.image} alt="marvel heroes" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
