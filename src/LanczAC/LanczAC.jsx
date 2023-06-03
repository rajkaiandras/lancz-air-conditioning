import React, { useEffect, useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../contexts/DarkModeContext.jsx';

// sections
/* import { IntroAnimation } from '../sections/IntroAnimation/IntroAnimation.jsx'; */
import { Home } from '../sections/Home/Home.jsx';
import { AboutUs } from '../sections/AboutUs/AboutUs.jsx';
import { PriceOffer } from '../sections/PriceOffer/PriceOffer.jsx';
import { MainFooter } from '../sections/MainFooter/MainFooter.jsx';

// components
import { LogosSource } from '../components/Logos/Logos.jsx';
import { IconsSource } from '../components/Icons/Icons.jsx';
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
        <LogosSource />
        <IconsSource />
        {/* <IntroAnimation /> */}
        <Home />
        <AboutUs />
        <PriceOffer />
        <MainFooter />
        <ScrollTop />
      </main>
    </>
  );
};
