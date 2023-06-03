import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// components
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';
import { PriceOfferForm } from '../../components/PriceOfferForm/PriceOfferForm.jsx';

// styles
import './PriceOffer.css';

export const PriceOffer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className="PriceOffer" id="section-price-offer">
      <div className={`price-offer-container ${darkMode ? 'dark-mode' : ''}`}>
        <SectionTitle />
        <PriceOfferForm />
      </div>
    </section>
  );
};
