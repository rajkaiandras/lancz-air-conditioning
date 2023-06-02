import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// styles
import './PriceOffer.css';

export const PriceOffer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="PriceOffer" id="section-price-offer">
      <div className={`price-offer-container ${darkMode ? 'dark-mode' : ''}`}>
        PriceOffer
      </div>
    </div>
  );
};
