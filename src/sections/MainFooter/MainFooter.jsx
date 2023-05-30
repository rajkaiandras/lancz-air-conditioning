import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// Styles
import './MainFooter.css';

export const MainFooter = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="MainFooter">
      <div className="main-footer-container">
        <div className="main-footer__info">
          <div className="info__summary"></div>
          <div className="info__site-map"></div>
          <div className="info__contact" id="section-contact"></div>
        </div>
        <div className="main-footer__development">
          <p className={`${darkMode ? 'dark-mode' : ''}`}>
            2023 Lancz Klíma - Minden jog fenntartva
          </p>
          <address className={`${darkMode ? 'dark-mode' : ''}`}>
            developed by{' '}
            <a href="https://www.linkedin.com/in/andrasrajkai">
              <strong>András Rajkai</strong>
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};
