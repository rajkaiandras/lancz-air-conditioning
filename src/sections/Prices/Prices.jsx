import React from 'react';

// assets
import airConditionerSet from '../../assets/images/air-conditioner-set-600x600-freepik.com@macrovector.png';

// components
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';

// styles
import './Prices.css';

export const Prices = () => {
  const sectionTitleText = {
    title: 'Áraink',
    subtitle: 'Kizárólag helyszíni felmérés után adunk konkrét árajánlatot',
  };

  return (
    <section className="Prices">
      <div className="prices-container">
        <SectionTitle
          title={sectionTitleText.title}
          subtitle={sectionTitleText.subtitle}
        />
        <section className="prices__first-list">
          <h5 className="list__title">
            A végleges árajánlatunk, figyelembe véve az ingatlan tulajdonságait
            és a kiépítendő klíma rendszer bonyolultságát, az alább található
            tételeket foglalja magába:
          </h5>

          <ul className="icon-list">
            <li className="icon-list__item">
              Klíma, hőszivíttyú beltéri egység felszerelését, bekötését
            </li>
            <li className="icon-list__item">
              Klíma, hőszivíttyú kültéri egység felszerelését, bekötését 4m
              magasságig
            </li>
            <li className="icon-list__item">
              Hűtőkör nyomáspróbáját, vákumozását, beüzemelését
            </li>
            <l className="icon-list__item" i>
              9mm hőszigeteléssel ellátott rézcső pár kiépítését 2 fm-ig
            </l>
            <li className="icon-list__item">
              Megerősített és rezgéscsillapított kültéri egységet tartó fali
              vagy trapéz konzolt
            </li>
            <li className="icon-list__item">
              Kondenzvíz gravitációs elvezetését kábelcsatornában 2 fm-ig
            </li>
            <li className="icon-list__item">
              Az elektromos hálózat kiépítését kábelcsatornában 2 fm-ig
            </li>
          </ul>
        </section>
        <img
          className="prices__air-conditioner-set"
          src={airConditionerSet}
          alt="air conditioner"
        />
        <section className="prices__second-list">
          <ul className="icon-list">
            <li className="icon-list__item">
              A klíma, hőszivattyú beépítésének, karbantartásának munkadíját
            </li>
            <li className="icon-list__item">Egyszeri főfal átfúrást</li>
            <li className="icon-list__item">
              Takarófólia leterítést, lábzsák használatát (az értékek megóvása
              érdekében)
            </li>
            <li className="icon-list__item">
              A keletkezett törmelék eltakarítást
            </li>
            <li className="icon-list__item">
              A telepített berendezés szakszerű beüzemelését
            </li>
            <li className="icon-list__item">
              1 év garanciát az általunk végzett munkára
            </li>
            <li className="icon-list__item">
              A készülék üzemeltetésének bemutatását
            </li>
          </ul>
        </section>
        <section className="prices__third-list">
          <ul>
            <li className="third-list__item">
              <h5>Klíma telepítés</h5>
              <p>5.3KW-ig (2m csőpár + konzol)</p>
              <h4>55.000 Ft/db</h4>
            </li>
            <div className="third-list__item-separator"></div>
            <li className="third-list__item">
              <h5>Karbantartás</h5>
              <p>Más által végzett telepítés esetén is</p>
              <h4>8.000 Ft/db</h4>
            </li>
            <div className="third-list__item-separator"></div>
            <li className="third-list__item">
              <h5>Csövezés</h5>
              <p>2m csőpár hosszúság felett</p>
              <h4>6.000 Ft/m</h4>
            </li>
            <div className="third-list__item-separator"></div>
            <li className="third-list__item">
              <h5>Leszerelés</h5>
              <p>Rendszer összetettségétől függően</p>
              <h4>16.000 Ft/db</h4>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};
