import React, { useEffect, useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// sections
import { Home } from '../../sections/Home/Home.jsx';
import { AboutUs } from '../../sections/AboutUs/AboutUs.jsx';
import { Footer } from '../../sections/Footer/Footer.jsx';

// components
import { LogosSource } from '../Logos/Logos.jsx';
import { IconsSource } from '../Icons/Icons.jsx';
import { MainHeader } from '../MainHeader/MainHeader.jsx';
import { HomeCarousel } from '../HomeCarousel/HomeCarousel.jsx';
import { ScrollTop } from '../ScrollTop/ScrollTop.jsx';

// Styles
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
      <main className="LanczAC" id="section-home">
        <LogosSource />
        <IconsSource />
        <MainHeader />
        <HomeCarousel />
        <Home />
        <AboutUs />
        <Footer />
        <ScrollTop />
      </main>
    </>
  );
};
