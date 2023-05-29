import React from 'react';

// styles
import './HamburgerMenu.css';

export const HamburgerMenu = ({
  darkMode,
  handleHamburgerMenu,
  hamburgerMenuIsOpen,
}) => {
  return (
    <div className="HamburgerMenu" onClick={handleHamburgerMenu}>
      <div
        className={`hamburger-menu__bar bar-top ${
          darkMode || hamburgerMenuIsOpen ? 'dark-mode' : ''
        } ${hamburgerMenuIsOpen ? 'open' : ''}`}
      ></div>
      <div
        className={`hamburger-menu__bar bar-center ${
          darkMode || hamburgerMenuIsOpen ? 'dark-mode' : ''
        } ${hamburgerMenuIsOpen ? 'open' : ''}`}
      ></div>
      <div
        className={`hamburger-menu__bar bar-bottom ${
          darkMode || hamburgerMenuIsOpen ? 'dark-mode' : ''
        } ${hamburgerMenuIsOpen ? 'open' : ''}`}
      ></div>
    </div>
  );
};
