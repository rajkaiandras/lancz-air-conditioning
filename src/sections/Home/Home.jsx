import React from 'react';

// components
import { MainHeader } from '../../components/MainHeader/MainHeader.jsx';
import { HomeCarousel } from '../../components/HomeCarousel/HomeCarousel.jsx';

// styles
import './Home.css';

export const Home = () => {
  return (
    <section className="Home" id="section-home">
      <MainHeader />
      <HomeCarousel />
    </section>
  );
};
