import React, { useEffect, useContext, useState } from 'react';

// dark mode context
import { DarkModeContext } from '../contexts/DarkModeContext.jsx';

// section components
import { Home } from '../sections/Home/Home.jsx';
import { ActualAd } from '../sections/ActualAd/ActualAd.jsx';
import { AboutUs } from '../sections/AboutUs/AboutUs.jsx';
import { Services } from '../sections/Services/Services.jsx';
import { Prices } from '../sections/Prices/Prices.jsx';
import { PriceOffer } from '../sections/PriceOffer/PriceOffer.jsx';
import { Imprint } from '../components/Imprint/Imprint.jsx';
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
  const [isImprintVisible, setIsImprintVisible] = useState(false);

  useEffect(() => {
    darkMode
      ? root.classList.add('dark-mode')
      : root.classList.remove('dark-mode');
  }, [root, darkMode]);

  const handleImprintVisibility = () => {
    setIsImprintVisible(!isImprintVisible);
  };

  return (
    <>
      <main className="LanczAC">
        {/* sprite sources */}
        <IconsSource />
        <LogosSource />
        <BrandLogosSource />

        {/* section components */}
        <Home />
        <ActualAd />
        <AboutUs />
        <Services />
        <Prices />
        <PriceOffer />
        <MainFooter handleImprintVisibility={handleImprintVisibility} />

        {/* impressum */}
        {isImprintVisible && (
          <Imprint handleImprintVisibility={handleImprintVisibility} />
        )}

        {/* scroll to top component */}
        <ScrollTop />
      </main>
    </>
  );
};
