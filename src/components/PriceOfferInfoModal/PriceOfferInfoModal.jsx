import React, { useContext } from 'react';

// context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// components
import { Icon } from '../Icons/Icons';

// styles
import './PriceOfferInfoModal.css';

export const PriceOfferInfoModal = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`PriceOfferInfoModal ${darkMode ? 'dark-mode' : ''}`}>
      <h6
        className={`price-offer-info-modal__title ${
          darkMode ? 'dark-mode' : ''
        }`}
      >
        Az alábbi információk megadásával segítheti az ajánlattétel pontosságát:
      </h6>
      <ul className="price-offer-info-modal__list">
        <li>Melyik településen található az ingatlan?</li>
        <li>Lakás tömbházban, esetleg családi ház?</li>
        <li>Csak hűtésre vagy esetleg fűtésre is használná a berendezést?</li>
        <li>Milyen nagy a fűtendő/hűtendő tér?</li>
        <li>Kinézte már a beépítendő készüléket?</li>
      </ul>
      <Icon id="modal-arrow" />
    </div>
  );
};
