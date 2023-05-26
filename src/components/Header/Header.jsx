import { React, useContext } from 'react';

// Theme Context
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

// Components
import { Logo } from '../Logos/Logos.jsx';
import { Icon } from '../Icons/Icons.jsx';

// Styles
import './Header.css';

export const Header = ({ themePicker }) => {
  const theme = useContext(ThemeContext);

  return (
    <header className="Header">
      <a href="#section-main" className="header__logo">
        <Logo id="full-name" />
      </a>
      <nav className="header__desktop-nav">
        <ul className="desktop-nav-inner">
          <li className="desktop-nav__link">
            <a className="btn" href="#section-main">
              Főoldal
            </a>
          </li>
          <li className="desktop-nav__link">
            <a className="btn" href="#section-services">
              Szolgáltatások
            </a>
          </li>
          <li className="desktop-nav__link">
            <a className="btn" href="#section-prices">
              Árak
            </a>
          </li>
          <li className="desktop-nav__link">
            <a className="btn" href="#section-about-us">
              Rólunk
            </a>
          </li>
          <li className="desktop-nav__link">
            <a className="btn" href="#section-price-offer">
              Ajánlatkérés
            </a>
          </li>
          <li className="desktop-nav__link">
            <a className="btn btn--outline" href="#section-contact">
              Kapcsolat
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__theme-picker" onClick={themePicker}>
        {theme === 'light mode' ? (
          <Icon id="dark-mode" />
        ) : (
          <Icon id="light-mode" />
        )}
      </div>
    </header>
  );
};
