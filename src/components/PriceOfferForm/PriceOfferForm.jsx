import React, { useState } from 'react';

// components
import { Icon } from '../Icons/Icons.jsx';
import { PriceOfferInfoModal } from '../PriceOfferInfoModal/PriceOfferInfoModal.jsx';

// styles
import './PriceOfferForm.css';

export const PriceOfferForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [offerSubject, setOfferSubject] = useState('');
  const [offerInformation, setOfferInformation] = useState('');

  const priceOfferData = {
    'Teljes név': fullName,
    Telefonszám: phoneNumber,
    'E-mail cím': emailAddress,
    'Ajánlat tárgya': offerSubject,
    Információk: offerInformation,
  };

  const handlePriceOfferSubmit = (e) => {
    e.preventDefault();
    console.log(priceOfferData);
  };

  return (
    <form className="PriceOfferForm">
      <div className="input--full-name-wrapper">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Név"
          required
        />
        <Icon id="person-fill" />
      </div>
      <div className="input--phone-number-wrapper">
        <input
          className="input--phone-number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Telefonszám"
        />
        <Icon id="phone-fill" />
      </div>
      <div className="input--e-mail-wrapper">
        <input
          className="input--e-mail"
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="E-mail"
        />
        <Icon id="mail-fill" />
      </div>
      <div className="input--offer-subject-wrapper">
        <input
          className="input--offer-subject"
          type="text"
          value={offerSubject}
          onChange={(e) => setOfferSubject(e.target.value)}
          placeholder="Tárgy"
        />
        <Icon id="engineering-fill" />
      </div>
      <div className="input--offer-information-wrapper">
        <textarea
          className="input--offer-information"
          type="text"
          value={offerInformation}
          onChange={(e) => setOfferInformation(e.target.value)}
          placeholder="Információk"
          rows="4"
        />
        <Icon id="info-fill" />
        <PriceOfferInfoModal />
      </div>
      <div className="input--submit-wrapper">
        <input
          className="btn btn--filled input--submit"
          type="submit"
          onClick={handlePriceOfferSubmit}
          value="Elküldés"
        />
      </div>
      <div className="frame-decoration"></div>
    </form>
  );
};
