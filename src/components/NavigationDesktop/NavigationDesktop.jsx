import React, { useContext } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// Styles
import './NavigationDesktop.css';

export const NavigationDesktop = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <nav className="NavigationDesktop">
      <ul className="navigation-desktop__list">
        <li className="navigation-desktop__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-home"
          >
            Főoldal
          </a>
        </li>
        <li className="navigation-desktop__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-services"
          >
            Szolgáltatások
          </a>
        </li>
        <li className="navigation-desktop__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-prices"
          >
            Árak
          </a>
        </li>
        <li className="navigation-desktop__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-about-us"
          >
            Rólunk
          </a>
        </li>
        <li className="navigation-desktop__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-price-offer"
          >
            Ajánlatkérés
          </a>
        </li>
        <li className="navigation-desktop__item">
          <a className="btn btn--outline" href="#section-contact">
            Kapcsolat
          </a>
        </li>
      </ul>
    </nav>
  );
};
