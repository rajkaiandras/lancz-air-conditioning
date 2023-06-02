import React, { useContext, useState } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// styles
import './PriceOffer.css';

export const PriceOffer = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [offerSubject, setOfferSubject] = useState('');
  const [offerInformation, setOfferInformation] = useState('');

  const priceOffer = {
    'Teljes név': fullName,
    Telefonszám: phoneNumber,
    'E-mail cím': emailAddress,
    'Ajánlat tárgya': offerSubject,
    Információk: offerInformation,
  };

  const handlePriceOfferSubmit = (e) => {
    e.preventDefault();
    console.log(priceOffer);
  };

  return (
    <section className="PriceOffer" id="section-price-offer">
      <div className={`price-offer-container ${darkMode ? 'dark-mode' : ''}`}>
        <div className="section-title-container">
          <h5 className="title__main-title">Árajánlat</h5>
          <h3 className="title__subtitle">
            Kérje ajánlatunkat ingyenes helyszíni felméréssel
          </h3>
        </div>
        <form className="price-offer-form">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Teljes név"
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Telefonszám"
          />
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="E-mail"
          />
          <select
            value={offerSubject}
            onChange={(e) => setOfferSubject(e.target.value)}
          >
            <option value="install">Telepítés</option>
            <option value="repair">Javítás</option>
            <option value="warrantee">Garancia</option>
          </select>
          <input
            type="text"
            value={offerInformation}
            onChange={(e) => setOfferInformation(e.target.value)}
            placeholder="Információk"
          />
          <input
            type="submit"
            onClick={handlePriceOfferSubmit}
            value="Elküldés"
          />
        </form>
      </div>
    </section>
  );
};
