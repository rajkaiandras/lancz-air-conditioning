import React from 'react';

// SVG Logo Sprite
import logoSprite from '../../assets/logos/logo-svg-sprite.svg';

// Styles
import './Header.css';

export const Header = () => {
  return (
    <header className="Header">
      <svg className="header__logo">
        <use href={logoSprite + '#logo-full-name'} />
      </svg>
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
    </header>
  );
};
