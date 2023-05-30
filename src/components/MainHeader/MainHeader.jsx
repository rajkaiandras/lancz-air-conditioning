import { React, useState, useContext, useEffect } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// components
import { Logo } from '../Logos/Logos.jsx';
import { Icon } from '../Icons/Icons.jsx';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu.jsx';
import { NavigationMobile } from '../NavigationMobile/NavigationMobile.jsx';
import { NavigationDesktop } from '../NavigationDesktop/NavigationDesktop.jsx';
import { Backdrop } from '../Backdrop/Backdrop.jsx';

// styles
import './MainHeader.css';

export const MainHeader = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const body = document.querySelector('body');

  const handleDarkModeToggler = () => {
    toggleDarkMode();
  };

  const handleHamburgerMenu = () => {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
  };

  useEffect(() => {
    hamburgerMenuIsOpen
      ? body.classList.add('disable-scrolling')
      : body.classList.remove('disable-scrolling');
  }, [body, hamburgerMenuIsOpen]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className={`MainHeader ${darkMode ? 'dark-mode' : ''}`}>
      <div className="main-header-container">
        {/* HAMBURGER MENU */}
        {windowWidth < 1024 && (
          <HamburgerMenu
            darkMode={darkMode}
            handleHamburgerMenu={handleHamburgerMenu}
            hamburgerMenuIsOpen={hamburgerMenuIsOpen}
          />
        )}

        {/* LOGO */}
        <a href="#section-home" className="main-header__logo">
          {windowWidth <= 640 ? (
            <Logo id="monogram" />
          ) : (
            <Logo id="full-name" />
          )}
        </a>

        {/* MOBILE NAVIGATION */}
        {windowWidth < 1024 && (
          <NavigationMobile
            hamburgerMenuIsOpen={hamburgerMenuIsOpen}
            handleHamburgerMenu={handleHamburgerMenu}
          />
        )}

        {/* DESKTOP NAVIGATION */}
        {windowWidth >= 1024 && <NavigationDesktop />}

        {/* DARK MODE TOGGLER */}
        <div
          className={`main-header__dark-mode-toggler ${
            darkMode ? 'dark-mode' : ''
          }`}
          onClick={handleDarkModeToggler}
        >
          {darkMode ? <Icon id="light-mode" /> : <Icon id="dark-mode" />}
        </div>

        {/* BACKDROP */}
        {hamburgerMenuIsOpen && (
          <Backdrop handleHamburgerMenu={handleHamburgerMenu} />
        )}
      </div>
    </header>
  );
};
