import React from 'react';

// icons
import { Icon } from '../../components/Icons/Icons.jsx';

// styles
import './Imprint.css';

export const Imprint = ({ handleImprintVisibility }) => {
  return (
    <section className="Imprint">
      <div className="imprint-inner">
        <h1 className="imprint__title">Impresszum</h1>
        <article className="imprint__owner">
          <h2 className="owner__title">A weboldal tulajdonosa</h2>
          <ul className="owner-inner">
            <li>
              <h3 className="owner__name">Lancz Kornél e.v.</h3>
            </li>
            <li>
              <p className="owner__tax-number">Adószám: 56870961-2-40</p>
            </li>
            <li>
              <p className="owner__address">
                8373 Rezi, Petőfi Sándor utca 78.
              </p>
            </li>
            <li>
              <a className="owner__phone" href="tel:+36302965944">
                +36 (30) 296 5944
              </a>
            </li>
            <li>
              <a className="owner__e-mail" href="mailto:info@lanczklima.hu">
                info@lanczklima.hu
              </a>
            </li>
          </ul>
        </article>
        <article className="imprint__developer">
          <h2 className="developer__title">A weboldalt fejlesztette</h2>
          <ul className="developer-inner">
            <li>
              <h3 className="developer__name">Rajkai András</h3>
            </li>
            <li>
              <a className="developer__phone" href="tel:+36305004691">
                +36 (30) 500 4691
              </a>
            </li>
            <li>
              <a
                className="developer__linked-in"
                href="https://www.linkedin.com/in/andrasrajkai"
              >
                LinkedIn Profil
              </a>
            </li>
          </ul>
        </article>
        <article className="imprint__hosting-provider">
          <h2 className="hosting-provider__title">Tárhelyszolgáltató</h2>
          <ul className="hosting-provider-inner">
            <li>
              <h3 className="hosting-provider__name">Nethely Kft.</h3>
            </li>
            <li>
              <p className="hosting-provider__tax-number">
                Adószám: 23358005-2-43
              </p>
            </li>
            <li>
              <p className="hosting-provider__address">
                1115 Budapest, Halmi utca 29.
              </p>
            </li>
            <li>
              <a className="hosting-provider__phone" href="tel:+36305004691">
                +36 (30) 500 4691
              </a>
            </li>
            <li>
              <a
                className="hosting-provider__email"
                href="mailto:info@nethely.hu"
              >
                info@nethely.hu
              </a>
            </li>
            <li>
              <a
                className="hosting-provider__website"
                href="https://www.nethely.hu/"
              >
                www.nethely.hu
              </a>
            </li>
          </ul>
        </article>
        <div className="close-sign" onClick={handleImprintVisibility}>
          <Icon id="close" />
        </div>
      </div>
    </section>
  );
};
