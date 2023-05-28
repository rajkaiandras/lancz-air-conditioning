import React from 'react';

// Styles
import './HamburgerMenu.css';

export const HamburgerMenu = ({
  darkMode,
  handleHamburgerMenu,
  hamburgerMenuIsOpen,
}) => {
  return (
    <div class="HamburgerMenu" onClick={handleHamburgerMenu}>
      <div
        class={`hamburger-menu__bar bar-top ${
          darkMode || hamburgerMenuIsOpen ? 'dark-mode' : ''
        } ${hamburgerMenuIsOpen ? 'open' : ''}`}
      ></div>
      <div
        class={`hamburger-menu__bar bar-center ${
          darkMode || hamburgerMenuIsOpen ? 'dark-mode' : ''
        } ${hamburgerMenuIsOpen ? 'open' : ''}`}
      ></div>
      <div
        class={`hamburger-menu__bar bar-bottom ${
          darkMode || hamburgerMenuIsOpen ? 'dark-mode' : ''
        } ${hamburgerMenuIsOpen ? 'open' : ''}`}
      ></div>
    </div>
  );
};
