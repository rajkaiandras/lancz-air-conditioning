import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext, darkMode } from '../../contexts/DarkModeContext.jsx';

// assets
import logoDiscount from '../../assets/logos/discount.png';
import actualAdGree from '../../assets/images/actual-ad-gree.png';

// styles
import './ActualAd.css';

export const ActualAd = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className="ActualAd" id="section-actual-ad">
      <div className="actual-ad-inner">
        <article className="discount-text-container">
          <img
            className="discount-text__logo"
            src={logoDiscount}
            alt="discount logo"
          />
          <h3 className={`discount-text__title ${darkMode ? 'dark-mode' : ''}`}>
            Aktuális Gree klíma akciónk<br></br>
            <span className="highlighted">beszereléssel együtt</span>
          </h3>
          <h1 className={`discount-text__price ${darkMode ? 'dark-mode' : ''}`}>
            360.000 Ft
          </h1>
          <div
            className={`frame-decoration ${darkMode ? 'dark-mode' : ''}`}
          ></div>
        </article>
        <img
          className={`discount-img ${darkMode ? 'dark-mode' : ''}`}
          src={actualAdGree}
          alt="air conditioner"
        />
      </div>
    </section>
  );
};
