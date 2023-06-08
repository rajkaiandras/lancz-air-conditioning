import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// assets
import airConditionerSet from '../../assets/images/air-conditioner-set-600x600-freepik.com@macrovector.png';

// components
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';
import { BrandsCarousel } from '../../components/BrandsCarousel/BrandsCarousel.jsx';

// styles
import './Prices.css';

export const Prices = () => {
  const { darkMode } = useContext(DarkModeContext);

  const sectionTitleText = {
    title: 'Árak',
    subtitle: 'Kizárólag helyszíni felmérés után adunk konkrét árajánlatot',
  };

  return (
    <section className="Prices" id="section-prices">
      <div className={`prices-inner ${darkMode ? 'dark-mode' : ''}`}>
        <div className="prices__titles">
          <SectionTitle
            title={sectionTitleText.title}
            subtitle={sectionTitleText.subtitle}
          />
          <h5 className="titles__list-title">
            Figyelembe véve az ingatlan tulajdonságait és a kiépítendő klíma
            rendszer bonyolultságát, a végleges árajánlatunk az alább található
            tételeket foglalja magába.
          </h5>
        </div>
        <section
          className={`prices__lists-container ${darkMode ? 'dark-mode' : ''}`}
        >
          <ul className="list-first icon-list">
            <li className="icon-list__item">
              Klíma, hőszivíttyú beltéri egység felszerelését, bekötését.
            </li>
            <li className="icon-list__item">
              Klíma, hőszivíttyú kültéri egység felszerelését, bekötését 4m
              magasságig.
            </li>
            <li className="icon-list__item">
              Hűtőkör nyomáspróbáját, vákumozását, beüzemelését.
            </li>
            <li className="icon-list__item" i>
              9mm hőszigeteléssel ellátott rézcső pár kiépítését 2 fm-ig.
            </li>
            <li className="icon-list__item">
              Megerősített és rezgéscsillapított kültéri egységet tartó fali
              vagy trapéz konzolt.
            </li>
            <li className="icon-list__item">
              Kondenzvíz gravitációs elvezetését kábelcsatornában 2 fm-ig.
            </li>
            <li className="icon-list__item">
              Az elektromos hálózat kiépítését kábelcsatornában 2 fm-ig.
            </li>
          </ul>
          <ul className="list-second icon-list">
            <li className="icon-list__item">
              A klíma, hőszivattyú beépítésének, karbantartásának munkadíját.
            </li>
            <li className="icon-list__item">Egyszeri főfal átfúrást.</li>
            <li className="icon-list__item">
              Takarófólia leterítést, lábzsák használatát (az értékek megóvása
              érdekében).
            </li>
            <li className="icon-list__item">
              A keletkezett törmelék eltakarítást.
            </li>
            <li className="icon-list__item">
              A telepített berendezés szakszerű beüzemelését.
            </li>
            <li className="icon-list__item">
              1 év garanciát az általunk végzett munkára.
            </li>
            <li className="icon-list__item">
              A készülék üzemeltetésének bemutatását.
            </li>
          </ul>
        </section>
        <img
          className="prices__air-conditioner-set-img"
          src={airConditionerSet}
          alt="air conditioner"
        />
        <ul className={`prices__separated-list ${darkMode ? 'dark-mode' : ''}`}>
          <li className="separated-list__item">
            <h5>Klíma telepítés</h5>
            <p>5.3KW-ig (2m csőpár + konzol)</p>
            <h4>55.000 Ft/db</h4>
          </li>
          <li className="separated-list__item">
            <h5>Karbantartás</h5>
            <p>Más által telepített esetén is</p>
            <h4>8.000 Ft/db</h4>
          </li>
          <li className="separated-list__item">
            <h5>Csövezés</h5>
            <p>2m csőpár hosszúság felett</p>
            <h4>6.000 Ft/m</h4>
          </li>
          <li className="separated-list__item">
            <h5>Leszerelés</h5>
            <p>Összetettségétől függően</p>
            <h4>16.000 Ft/db</h4>
          </li>
        </ul>
      </div>
      <BrandsCarousel />
    </section>
  );
};
