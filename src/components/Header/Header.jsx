import { React, useContext, useEffect, useRef, useState } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// Components
import { Logo } from '../Logos/Logos.jsx';
import { Icon } from '../Icons/Icons.jsx';

// Styles
import './Header.css';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleDarkModeToggler = () => {
    toggleDarkMode();
  };

  const handleHamburgerMenu = () => {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className="Header">
      {/* HAMBURGER MENU */}
      <div class="header__hamburger-menu" onClick={handleHamburgerMenu}>
        <div
          class={`hamburger-menu__bar bar-top ${darkMode ? 'dark-mode' : ''} ${
            hamburgerMenuIsOpen ? 'open' : ''
          }`}
        ></div>
        <div
          class={`hamburger-menu__bar bar-center ${
            darkMode ? 'dark-mode' : ''
          } ${hamburgerMenuIsOpen ? 'open' : ''}`}
        ></div>
        <div
          class={`hamburger-menu__bar bar-bottom ${
            darkMode ? 'dark-mode' : ''
          } ${hamburgerMenuIsOpen ? 'open' : ''}`}
        ></div>
      </div>
      {/* LOGO */}
      <a href="#section-main" className="header__logo">
        {windowWidth < 640 ? <Logo id="monogram" /> : <Logo id="full-name" />}
      </a>
      {/* NAVIGATION */}
      <nav className="header__navigation">
        {/* MOBILE NAVIGATION */}
        <div className="navigation--mobile">
          <div
            className={`navigation--mobile-menu ${
              hamburgerMenuIsOpen ? 'open' : ''
            }`}
          >
            <ul className="navigation--mobile ">
              <li className="navigation--mobile__link">
                <a
                  className={`btn ${darkMode ? 'dark-mode' : ''}`}
                  href="#section-main"
                >
                  Főoldal
                </a>
              </li>
              <li className="navigation--mobile__link">
                <a
                  className={`btn ${darkMode ? 'dark-mode' : ''}`}
                  href="#section-services"
                >
                  Szolgáltatások
                </a>
              </li>
              <li className="navigation--mobile__link">
                <a
                  className={`btn ${darkMode ? 'dark-mode' : ''}`}
                  href="#section-prices"
                >
                  Árak
                </a>
              </li>
              <li className="navigation--mobile__link">
                <a
                  className={`btn ${darkMode ? 'dark-mode' : ''}`}
                  href="#section-about-us"
                >
                  Rólunk
                </a>
              </li>
              <li className="navigation--mobile__link">
                <a
                  className={`btn ${darkMode ? 'dark-mode' : ''}`}
                  href="#section-price-offer"
                >
                  Ajánlatkérés
                </a>
              </li>
              <li className="navigation--mobile__link">
                <a className="btn btn--outline" href="#section-contact">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* DESKTOP NAVIGATION */}
        <ul className="navigation--desktop ">
          <li className="navigation--desktop__link">
            <a
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
              href="#section-main"
            >
              Főoldal
            </a>
          </li>
          <li className="navigation--desktop__link">
            <a
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
              href="#section-services"
            >
              Szolgáltatások
            </a>
          </li>
          <li className="navigation--desktop__link">
            <a
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
              href="#section-prices"
            >
              Árak
            </a>
          </li>
          <li className="navigation--desktop__link">
            <a
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
              href="#section-about-us"
            >
              Rólunk
            </a>
          </li>
          <li className="navigation--desktop__link">
            <a
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
              href="#section-price-offer"
            >
              Ajánlatkérés
            </a>
          </li>
          <li className="navigation--desktop__link">
            <a className="btn btn--outline" href="#section-contact">
              Kapcsolat
            </a>
          </li>
        </ul>
      </nav>
      {/* DARK MODE TOGGLER */}
      <div
        className={`header__dark-mode-toggler ${darkMode ? 'dark-mode' : ''}`}
        onClick={handleDarkModeToggler}
      >
        {darkMode ? <Icon id="light-mode" /> : <Icon id="dark-mode" />}
      </div>
    </header>
  );
};
