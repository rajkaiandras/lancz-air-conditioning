import { React, useState, useContext, useEffect } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// Components
import { Logo } from '../Logos/Logos.jsx';
import { Icon } from '../Icons/Icons.jsx';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu.jsx';
import { NavigationMobile } from '../NavigationMobile/NavigationMobile.jsx';
import { NavigationDesktop } from '../NavigationDesktop/NavigationDesktop.jsx';

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
      {windowWidth < 1024 && (
        <HamburgerMenu
          darkMode={darkMode}
          handleHamburgerMenu={handleHamburgerMenu}
          hamburgerMenuIsOpen={hamburgerMenuIsOpen}
        />
      )}

      {/* LOGO */}
      <a href="#section-main" className="header__logo">
        {windowWidth <= 640 ? <Logo id="monogram" /> : <Logo id="full-name" />}
      </a>

      {/* MOBILE NAVIGATION */}
      {windowWidth < 1024 && (
        <NavigationMobile hamburgerMenuIsOpen={hamburgerMenuIsOpen} />
      )}

      {/* DESKTOP NAVIGATION */}
      {windowWidth >= 1024 && <NavigationDesktop />}

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
