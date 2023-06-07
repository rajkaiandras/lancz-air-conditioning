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

  const sectionTitleText = {
    title: 'Ajánlatkérés',
    subtitle: 'Kérje ajánlatunkat ingyenes helyszíni felméréssel',
  };

  return (
    <section className="PriceOffer" id="section-price-offer">
      <div className={`price-offer-inner ${darkMode ? 'dark-mode' : ''}`}>
        <div className="section-title-wrapper">
          <SectionTitle
            title={sectionTitleText.title}
            subtitle={sectionTitleText.subtitle}
          />
        </div>
        <PriceOfferForm />
        <div className="bg-image"></div>
      </div>
    </section>
  );
};
