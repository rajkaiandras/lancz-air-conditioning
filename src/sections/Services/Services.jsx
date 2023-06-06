import React from 'react';

// components
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';
import { Logo } from '../../components/Logos/Logos.jsx';
import { Icon } from '../../components/Icons/Icons.jsx';

// styles
import './Services.css';

export const Services = () => {
  const sectionTitleText = {
    title: 'Szolgáltatásaink',
    subtitle: 'Teljes körű megoldások kedvező áron az egész Dunántúl területén',
  };

  return (
    <section className="Services">
      <div className="services-inner">
        <SectionTitle
          title={sectionTitleText.title}
          subtitle={sectionTitleText.subtitle}
        />
        <div className="services__cards">
          <div className="card card__installation">
            <div className="card__image"></div>
            <h4 className="card__title">Telepítés és Beüzemelés</h4>
            <p className="card__text">
              Szakszerű telepítés előre egyeztetett időpontban. Egyszerűbb klíma
              felszerelés 2-4 óra alatt megvalósul, míg összetettebb telepítés
              akár több napot is igénybe vehet. Bel- és kültéri egység
              felhelyezése, kondenz víz elvezetése, bekötés. Villanyszerelő
              végzettséggel is rendelkezünk, az elektromos hálózat kiépítését is
              elvégezzük.{' '}
            </p>
          </div>
          <div className="card card__warranty">
            <div className="card__image"></div>
            <h4 className="card__title">Karbantartás és Garancia</h4>
            <p className="card__text">
              A telepítés elvégzése után az ügyfélnek garanciális jegyzőkönyvet
              állítunk ki számlával. NKVH szerinti telepítési tanúsítványt adunk
              át, valamint igény esetén H tarifa igazolást is biztosítunk.
              Háztartási és ipari hűtők javítását is vállaljuk. Igény esetén
              készülék szivárgásvizsgálatot is vállalunk.
            </p>
          </div>
          <div className="card card__counseling">
            <div className="card__image"></div>
            <h4 className="card__title">Felmérés és Tanácsadás</h4>
            <p className="card__text">
              Ingyenes helyszíni felmérés és tanácsadás készülék választáshoz.
              Ekkor határozzuk meg a lakótérhez ajánlott klíma típusát és
              teljesítményét, illetve a telepítés helyét. A tanácsadás végén
              részletes árajánlatot készítünk. Minden előre látható költséget
              listázunk, így a lehető legreálisabb képet kapják a
              költségvetéshez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
