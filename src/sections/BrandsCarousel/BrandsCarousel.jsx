// components
/* import { Logos } from '../../components/Logos.jsx';
 */
// swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
      {brandsDB.map((brand, index) => {
        return (
          <SwiperSlide key={index}>
            <div>{brand}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
