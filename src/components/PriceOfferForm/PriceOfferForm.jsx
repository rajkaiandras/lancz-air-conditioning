import React, { useState } from 'react';

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
      <input
        className="input--full-name"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Név"
      />
      <input
        className="input--phone-number"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Telefonszám"
      />
      <input
        className="input--e-mail"
        type="email"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        placeholder="E-mail"
      />
      <input
        className="input--offer-subject"
        type="text"
        value={offerSubject}
        onChange={(e) => setOfferSubject(e.target.value)}
        placeholder="Tárgy"
      ></input>
      <textarea
        className="input--offer-information"
        type="text"
        value={offerInformation}
        onChange={(e) => setOfferInformation(e.target.value)}
        placeholder="Információk"
        rows="4"
      />
      <input
        className="btn btn--filled input--submit"
        type="submit"
        onClick={handlePriceOfferSubmit}
        value="Elküldés"
      />
      <div className="frame-decoration"></div>
    </form>
  );
};
