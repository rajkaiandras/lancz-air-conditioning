import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// components
import { Logo } from '../../components/Logos/Logos.jsx';
import { Icon } from '../../components/Icons/Icons.jsx';

// styles
import './MainFooter.css';

export const MainFooter = ({ handleImprintVisibility }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className="MainFooter">
      <div className="main-footer-inner">
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
            <div className="company__social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100093797289847"
                target="_blank"
                rel="noreferrer"
              >
                <Icon id="facebook" />
              </a>
            </div>
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
              <li className="section">
                <a className="section__link" href="#section-home">
                  Főoldal
                </a>
              </li>
              <li className="section">
                <a className="section__link" href="#section-about-us">
                  Rólunk
                </a>
              </li>
              <li className="section">
                <a className="section__link" href="#section-services">
                  Szolgáltatások
                </a>
              </li>
              <li className="section">
                <a className="section__link" href="#section-prices">
                  Árak
                </a>
              </li>

              <li className="section">
                <a className="section__link" href="#section-price-offer">
                  Ajánlatkérés
                </a>
              </li>
              <li className="section">
                <a className="section__link" href="#section-contact">
                  Kapcsolat
                </a>
              </li>
              <li className="section">
                <a
                  className="section__link"
                  href="#section-imprint"
                  onClick={handleImprintVisibility}
                >
                  Impresszum
                </a>
              </li>
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
                <a href="tel:+36302965944" className="phone__number item__link">
                  +36 30 296 5944
                </a>
              </li>
              <li className="contact__item contact__email">
                <h6 className="item__title email__title">E-mail cím</h6>
                <a
                  href="mailto:info@lanczklima.hu"
                  className="email__address item__link"
                >
                  info@lanczklima.hu
                </a>
              </li>
              <li className="contact__item contact__location">
                <h6 className="item__title location__title">Telephely</h6>
                <a
                  href="https://goo.gl/maps/n4ndQUQAjzjMUvgo8"
                  target="_blank"
                  rel="noreferrer"
                  className="location__address item__link"
                >
                  8373 Rezi, Petőfi S. u. 78.
                </a>
              </li>
            </ul>
            <div className="map-bg"></div>
          </div>
        </div>
        <div
          className={`main-footer__copyright ${darkMode ? 'dark-mode' : ''}`}
        >
          <p>&copy; 2023 Lancz Klíma - All Rights Reserved</p>
          <small>
            developed by{' '}
            <a
              className="developer-name"
              href="https://www.linkedin.com/in/andrasrajkai"
              target="_blank"
              rel="noreferrer"
            >
              András Rajkai
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};
