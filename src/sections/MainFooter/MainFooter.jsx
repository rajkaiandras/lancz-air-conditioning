import React from 'react';

// Styles
import './MainFooter.css';

export const MainFooter = () => {
  return (
    <div className="MainFooter">
      <div className="main-footer__info">
        <div className="info__summary"></div>
        <div className="info__site-map"></div>
        <div className="info__contact" id="section-contact"></div>
      </div>
      <div className="main-footer__development">
        <p>2023 Lancz Klíma - Minden jog fenntartva</p>
        <address>
          developed by{' '}
          <a href="https://www.linkedin.com/in/andrasrajkai">
            <strong>András Rajkai</strong>
          </a>
        </address>
      </div>
    </div>
  );
};
