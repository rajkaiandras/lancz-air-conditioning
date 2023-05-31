import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// components
import { Logo } from '../../components/Logos/Logos.jsx';

// Styles
import './MainFooter.css';

export const MainFooter = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="MainFooter">
      <div className="main-footer-container">
        <div className="main-footer__widgets">
          <div className="widget widget__company">
            <Logo id="monogram" />
            <Logo id="full-name" />
            <p
              className={`company__profile-text ${darkMode ? 'dark-mode' : ''}`}
            >
              Klíma és hőszivattyú technológiák telepítésére, karbantartására
              specializálódva.
            </p>
          </div>
          <div className="widget widget__site-map">
            <h4 className={`site-map__title ${darkMode ? 'dark-mode' : ''}`}>
              Oldaltérkép
            </h4>
            <ul
              className={`site-map__sections-list ${
                darkMode ? 'dark-mode' : ''
              }`}
            >
              <li className="section">Főoldal</li>
              <li className="section">Szolgáltatások</li>
              <li className="section">Árak</li>
              <li className="section">Rólunk</li>
              <li className="section">Árajánlat kérés</li>
              <li className="section">Kapcsolat</li>
            </ul>
          </div>
          <div
            className={`widget widget__contact ${darkMode ? 'dark-mode' : ''}`}
            id="section-contact"
          >
            <h4 className="contact__title">Kapcsolat</h4>
            <ul className="contact__contacts-list">
              <li className="contact__item contact__phone">
                <h6 className="item__title phone__title">Telefonszám</h6>
                <p className="phone__number">+36 30 296 5944</p>
              </li>
              <li className="contact__item contact__email">
                <h6 className="item__title email__title">E-mail</h6>
                <p className="email__address">info@lanczklima.hu</p>
              </li>
              <li className="contact__item contact__location">
                <h6 className="item__title location__title">Telephely</h6>
                <p className="location__address">8373 Rezi, Vár utca 4.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-footer__copyright">
          <p className={`${darkMode ? 'dark-mode' : ''}`}>
            &copy; 2023 Lancz Klíma - Minden jog fenntartva
          </p>
          <address className={`${darkMode ? 'dark-mode' : ''}`}>
            developed by{' '}
            <a href="https://www.linkedin.com/in/andrasrajkai">
              <author>András Rajkai</author>
            </a>
          </address>
        </div>
      </div>
    </div>
  );
};
