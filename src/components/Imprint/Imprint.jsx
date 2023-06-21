import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// icons
import { Icon } from '../../components/Icons/Icons.jsx';

// styles
import './Imprint.css';

export const Imprint = ({ handleImprintVisibility }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`Imprint ${darkMode ? 'dark-mode' : ''}`}>
      <div className="imprint-inner">
        <h1 className="imprint__title">Impresszum</h1>
        <article>
          <h2 className="imprint__subtitle">A weboldal tulajdonosa</h2>
          <ul>
            <li>
              <h3>Lancz Kornél e.v.</h3>
            </li>
            <li>
              <p>Adószám: 56870961-2-40</p>
            </li>
            <li>
              <span>Telephely: </span>
              <a
                href="https://goo.gl/maps/n4ndQUQAjzjMUvgo8"
                target="_blank"
                rel="noreferrer"
                className="location__address item__link"
              >
                8373 Rezi, Petőfi S. u. 78.
              </a>
            </li>
            <li>
              <span>Telefonszám: </span>
              <a href="tel:+36302965944">+36 (30) 296 5944</a>
            </li>
            <li>
              <span>E-mail cím: </span>
              <a href="mailto:info@lanczklima.hu">info@lanczklima.hu</a>
            </li>
          </ul>
        </article>
        <article>
          <h2 className="imprint__subtitle">A weboldalt fejlesztette</h2>
          <ul>
            <li>
              <h3>Rajkai András</h3>
            </li>
            <li>
              <span>Telefonszám: </span>
              <a href="tel:+36305004691">+36 (30) 500 4691</a>
            </li>
            <li>
              <span>LinkedIn: </span>
              <a href="https://www.linkedin.com/in/andrasrajkai">
                András Rajkai
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h2 className="imprint__subtitle">Tárhelyszolgáltató</h2>
          <ul>
            <li>
              <h3>Nethely Kft.</h3>
            </li>
            <li>
              <p>Adószám: 23358005-2-43</p>
            </li>
            <li>
              <span>Székhely: </span>
              <a
                href="https://goo.gl/maps/NSsytoXQD65T6VKG9"
                target="_blank"
                rel="noreferrer"
                className="location__address item__link"
              >
                1115 Budapest, Halmi utca 29.
              </a>
            </li>
            <li>
              <span>Telefonszám: </span>
              <a href="tel:+36305004691">+36 (30) 500 4691</a>
            </li>
            <li>
              <span>E-mail cím: </span>
              <a href="mailto:info@nethely.hu">info@nethely.hu</a>
            </li>
            <li>
              <span>Weboldal: </span>
              <a href="https://www.nethely.hu/">nethely.hu</a>
            </li>
          </ul>
        </article>
        <div className="close-sign" onClick={handleImprintVisibility}>
          {darkMode ? <Icon id="close-dark" /> : <Icon id="close" />}
        </div>
      </div>
    </section>
  );
};
