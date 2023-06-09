import React, { useEffect, useState } from 'react';

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

  const [offerInfoVisibility, setOfferInfoVisibility] = useState(false);

  const [isInputFieldEmpty, setIsInputFieldsEmpty] = useState(false);

  const priceOfferFormData = {
    Név: fullName,
    Telefonszám: phoneNumber,
    Email: emailAddress,
    Tárgy: offerSubject,
    Információ: offerInformation,
  };

  const handlePriceOfferSubmit = (e) => {
    e.preventDefault();

    resetInputFields();

    console.log(priceOfferFormData);
  };

  // empty input field test
  useEffect(() => {
    if (
      fullName.length === 0 ||
      phoneNumber.length === 0 ||
      emailAddress.length === 0 ||
      offerSubject.length === 0 ||
      offerInformation.length === 0
    ) {
      setIsInputFieldsEmpty(true);
    } else {
      setIsInputFieldsEmpty(false);
    }
  }, [fullName, phoneNumber, emailAddress, offerSubject, offerInformation]);

  const resetInputFields = () => {
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setOfferSubject('');
    setOfferInformation('');
  };

  const handleOfferInfoClick = () => {
    setOfferInfoVisibility(!offerInfoVisibility);
  };

  return (
    <form className="PriceOfferForm">
      <div className="input--full-name-wrapper">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Név"
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
          placeholder="Információ"
          rows="4"
        />
        <div onClick={handleOfferInfoClick}>
          <Icon id="info-fill" />
        </div>
        {offerInfoVisibility && <PriceOfferInfoModal />}
      </div>
      <div className="input--submit-wrapper">
        <input
          className="btn btn--filled input--submit"
          type="submit"
          onClick={handlePriceOfferSubmit}
          value="Elküldés"
          disabled={isInputFieldEmpty}
        />
      </div>
      <div className="frame-decoration"></div>
    </form>
  );
};
