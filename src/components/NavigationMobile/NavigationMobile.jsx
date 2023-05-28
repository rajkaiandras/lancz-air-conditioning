import React, { useContext } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// Styles
import './NavigationMobile.css';

export const NavigationMobile = ({
  hamburgerMenuIsOpen,
  handleHamburgerMenu,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const closeNavigationMobile = () => {
    handleHamburgerMenu();
  };
  return (
    <nav className={`NavigationMobile ${hamburgerMenuIsOpen ? 'open' : ''}`}>
      <ul className="navigation-mobile__list">
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-home"
            onClick={closeNavigationMobile}
          >
            Főoldal
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-services"
            onClick={closeNavigationMobile}
          >
            Szolgáltatások
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-prices"
            onClick={closeNavigationMobile}
          >
            Árak
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-about-us"
            onClick={closeNavigationMobile}
          >
            Rólunk
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className={`btn ${darkMode ? 'dark-mode' : ''}`}
            href="#section-price-offer"
            onClick={closeNavigationMobile}
          >
            Ajánlatkérés
          </a>
        </li>
        <li className="navigation-mobile__item">
          <a
            className="btn btn--outline"
            href="#section-contact"
            onClick={closeNavigationMobile}
          >
            Kapcsolat
          </a>
        </li>
      </ul>
    </nav>
  );
};
