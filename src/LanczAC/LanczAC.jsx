import React, { useEffect, useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../contexts/DarkModeContext.jsx';

// section components
import { Home } from '../sections/Home/Home.jsx';
import { ActualAd } from '../sections/ActualAd/ActualAd.jsx';
import { Services } from '../sections/Services/Services.jsx';
import { AboutUs } from '../sections/AboutUs/AboutUs.jsx';
import { Prices } from '../sections/Prices/Prices.jsx';
import { BrandsCarousel } from '../sections/BrandsCarousel/BrandsCarousel.jsx';
import { PriceOffer } from '../sections/PriceOffer/PriceOffer.jsx';
import { MainFooter } from '../sections/MainFooter/MainFooter.jsx';

// components
import { IconsSource } from '../components/Icons/Icons.jsx';
import { LogosSource } from '../components/Logos/Logos.jsx';
import { BrandLogosSource } from '../components/BrandLogos/BrandLogos.jsx';
import { ScrollTop } from '../components/ScrollTop/ScrollTop.jsx';

// styles
import './LanczAC.css';

export const LanczAC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const root = document.getElementById('root');

  useEffect(() => {
    darkMode
      ? root.classList.add('dark-mode')
      : root.classList.remove('dark-mode');
  }, [root, darkMode]);

  return (
    <>
      <main className="LanczAC">
        <IconsSource />
        <LogosSource />
        <BrandLogosSource />
        <Home />
        <ActualAd />
        <AboutUs />
        <Services />
        <Prices />
        <BrandsCarousel />
        <PriceOffer />
        <MainFooter />
        <ScrollTop />
      </main>
    </>
  );
};
