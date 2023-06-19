import React from 'react';

// styles
import './Imprint.css';

export const Imprint = () => {
  return (
    <section className="Imprint">
      <div className="imprint-inner">
        <h1 className="imprint__title">Impresszum</h1>
        <article className="imprint__owner">
          <h2 className="owner__title">A weboldal tulajdonosa</h2>
          <h3 className="owner__name">Lancz Kornél e.v.</h3>
          <p className="owner__address">8373 Rezi, Petőfi Sándor utca 78.</p>
          <a className="owner__phone" href="tel:+36302965944">
            +36 (30) 296 5944
          </a>
          <a className="owner__e-mail" href="mailto:info@lanczklima.hu">
            info@lanczklima.hu
          </a>
        </article>
        <article className="imprint__developer">
          <h2 className="developer__title">A weboldalt fejlesztette</h2>
          <h3 className="developer__name">Rajkai András</h3>
          <p className="developer__address">8373 Rezi, Bem József utca 19.</p>
          <a className="developer__phone" href="tel:+36305004691">
            +36 (30) 500 4691
          </a>
          <a
            className="developer__linked-in"
            href="https://www.linkedin.com/in/andrasrajkai"
          >
            LinkedIn
          </a>
        </article>
        <article className="imprint__hosting-provider">
          <h2 className="hosting-provider__title">Tárhelyszolgáltató</h2>
          <h3 className="hosting-provider__name">Nethely Kft.</h3>
          <p className="hosting-provider__address">
            1115 Budapest, Halmi utca 29.
          </p>
          <a className="hosting-provider__phone" href="tel:+36305004691">
            +36 (30) 500 4691
          </a>
          <p className="hosting-provider__tax-number">Adószám: 23358005-2-43</p>
          <a
            className="hosting-provider__website"
            href="https://www.nethely.hu/"
          >
            LinkedIn
          </a>
        </article>
      </div>
    </section>
  );
};
