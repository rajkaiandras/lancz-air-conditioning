import React, { useContext } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// Styles
import './NavigationMobile.css';

export const NavigationMobile = ({ hamburgerMenuIsOpen }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <nav className={`Navigation-mobile ${hamburgerMenuIsOpen ? 'open' : ''}`}>
      <ul className="navigation-mobile__list">
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-main"
          >
            Főoldal
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-services"
          >
            Szolgáltatások
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-prices"
          >
            Árak
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-about-us"
          >
            Rólunk
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-price-offer"
          >
            Ajánlatkérés
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a className="btn btn--outline" href="#section-contact">
            Kapcsolat
          </a>
        </li>
      </ul>
    </nav>
  );
};
