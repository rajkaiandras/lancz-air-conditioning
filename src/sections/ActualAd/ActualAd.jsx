import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// assets
import logoDiscount from '../../assets/images/actual-ad-logo-discount.png';
import actualAdImg from '../../assets/images/actual-ad-midea-ac.png';

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
            Aktuális Midea klíma akciónk<br></br>
            {/* <span className="highlighted">beszereléssel együtt</span>
            <span className="highlighted">
              WiFi / 3D légáram / Cold Plasma / Távirányítóba integrált hőmérő
            </span> */}
          </h3>
          <h4 className={`discount-text__price ${darkMode ? 'dark-mode' : ''}`}>
            Xtreme Save Pro 3.5kw 264.070 Ft
          </h4>
          <h4 className={`discount-text__price ${darkMode ? 'dark-mode' : ''}`}>
            Xtreme Save Pro 2.5kw 254.700 Ft
          </h4>
          <h4 className={`discount-text__price ${darkMode ? 'dark-mode' : ''}`}>
            Vivax Cool (Midea) 156.400 Ft
          </h4>
          <div
            className={`frame-decoration ${darkMode ? 'dark-mode' : ''}`}
          ></div>
        </article>
        <img
          className={`discount-img ${darkMode ? 'dark-mode' : ''}`}
          src={actualAdImg}
          alt="air conditioner"
        />
      </div>
    </section>
  );
};
