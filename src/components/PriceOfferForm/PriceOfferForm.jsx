import React, { useState } from 'react';

// styles
import './PriceOfferForm.css';

export const PriceOfferForm = () => {
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
    <form className="PriceOfferForm">
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
      <div className="select">
        <select
          value={offerSubject}
          onChange={(e) => setOfferSubject(e.target.value)}
        >
          <option value="install">Telepítés</option>
          <option value="repair">Javítás</option>
          <option value="warrantee">Garancia</option>
        </select>
      </div>
      <textarea
        type="text"
        value={offerInformation}
        onChange={(e) => setOfferInformation(e.target.value)}
        placeholder="Információk"
        rows="4"
        cols="50"
      />
      <input type="submit" onClick={handlePriceOfferSubmit} value="Elküldés" />
    </form>
  );
};
