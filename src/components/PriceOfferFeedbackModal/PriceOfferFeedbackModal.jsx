import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// components
import { Logo } from '../Logos/Logos.jsx';

// styles
import './PriceOfferFeedbackModal.css';

export const PriceOfferFeedbackModal = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`PriceOfferFeedbackModal ${darkMode ? 'dark-mode' : ''}`}>
      <Logo id="monogram" />
      <h5 className="modal__title">Ajánlatkérését megkaptuk!</h5>
      <p className="modal__subtitle">
        Munkatársunk hamarosan felveszi Önnel a kapcsolatot.
      </p>
    </div>
  );
};
