import React, { useEffect, useContext } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// Components
import { LogosSource } from '../Logos/Logos.jsx';
import { IconsSource } from '../Icons/Icons.jsx';
import { Header } from '../Header/Header.jsx';
import { AboutUs } from '../AboutUs/AboutUs.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { ScrollTop } from '../ScrollTop/ScrollTop.jsx';

// Styles
import './LanczAC.css';
import { HomeCarousel } from '../HomeCarousel/HomeCarousel.jsx';

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
      <HomeCarousel />
      <div className="LanczAC">
        <LogosSource />
        <IconsSource />
        <Header />
        <AboutUs />
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
};
