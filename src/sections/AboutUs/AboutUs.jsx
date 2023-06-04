import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// components
import { Logo } from '../../components/Logos/Logos.jsx';
import { Icon } from '../../components/Icons/Icons';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';

// styles
import './AboutUs.css';

export const AboutUs = () => {
  const { darkMode } = useContext(DarkModeContext);

  const sectionTitleText = {
    title: 'Rólunk',
    subtitle:
      'Több évnyi tapasztalattal a hátunk mögött állunk az Ön rendelkezésére',
  };

  return (
    <section className="AboutUs" id="section-about-us">
      <div className={`about-us-container ${darkMode ? 'dark-mode' : ''}`}>
        <article className="about-us__text">
          <SectionTitle
            title={sectionTitleText.title}
            subtitle={sectionTitleText.subtitle}
          />
          <section className="text__main">
            <p>
              Célunk hogy a potenciális megrendelők számára biztos megoldást
              nyújtsunk klíma technológiák kiépítéséhez.
            </p>
            <p>
              Vállalkozásunk megbízhatóságát, valamint jó hírét bizonyítja a
              számos visszatérő, állandó partnerünk mellett hogy egyre több új
              megrendelő is igénybe veszi szolgáltatásainkat.
            </p>
          </section>
          <section className="text__highlighted">
            <Logo id="monogram" />
            <div className="highlighted__separator"></div>
            <p className="highlighted__text">
              Munkáinkra minden esetben teljeskörű garanciát vállalunk!
            </p>
          </section>
          <section className="text__listing">
            <ul>
              <li>Személyes kapcsolat kialakítás, helyszíni felmérés</li>
              <li>Több év szakmai tapasztalat a minőségi munkához</li>
              <li>
                A határidők pontos betartásával állunk ügyfeleink rendelkezésére
              </li>
            </ul>
          </section>
        </article>
        <article className="about-us__image">
          <div className="image__badge">
            <Icon id="experience" />
            <h6 className="badge__text">Mert bennünk megbízhat</h6>
          </div>
        </article>
      </div>
    </section>
  );
};
