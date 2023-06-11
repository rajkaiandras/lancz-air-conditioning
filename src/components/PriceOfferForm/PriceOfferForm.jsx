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

  /* const [isInputFieldEmpty, setIsInputFieldsEmpty] = useState(false); */

  const [offerInfoVisibility, setOfferInfoVisibility] = useState(false);

  // form submit handler
  const handlePriceOfferSubmit = (e) => {
    e.preventDefault();

    const priceOfferFormData = new FormData(e.target);
    console.log(Object.fromEntries(priceOfferFormData.entries()));

    resetInputFields();
  };

  // disable submit btn (empty input field)
  /* useEffect(() => {
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
  }, [fullName, phoneNumber, emailAddress, offerSubject, offerInformation]); */

  // reset input fields to default placeholder texts
  const resetInputFields = () => {
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setOfferSubject('');
    setOfferInformation('');
  };

  // info modal visibility
  const handleOfferInfoClick = () => {
    setOfferInfoVisibility(!offerInfoVisibility);
  };

  return (
    <form onSubmit={handlePriceOfferSubmit} className="PriceOfferForm">
      <div className="input--full-name-wrapper">
        <input
          className="input--full-name"
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          placeholder="Név"
          required
        />
        <Icon id="person-fill" />
      </div>
      <div className="input--phone-number-wrapper">
        <input
          className="input--phone-number"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Telefonszám"
          required
        />
        <Icon id="phone-fill" />
      </div>
      <div className="input--e-mail-wrapper">
        <input
          className="input--e-mail"
          type="email"
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="E-mail"
          required
        />
        <Icon id="mail-fill" />
      </div>
      <div className="input--offer-subject-wrapper">
        <input
          className="input--offer-subject"
          type="text"
          name="offerSubject"
          value={offerSubject}
          onChange={(e) => setOfferSubject(e.target.value)}
          placeholder="Tárgy"
          required
        />
        <Icon id="engineering-fill" />
      </div>
      <div className="input--offer-information-wrapper">
        <textarea
          className="input--offer-information"
          type="text"
          name="offerInformation"
          value={offerInformation}
          onChange={(e) => setOfferInformation(e.target.value)}
          placeholder="Információ"
          rows="4"
          required
        />
        <div onClick={handleOfferInfoClick}>
          <Icon id="info-fill" />
        </div>
        {offerInfoVisibility && <PriceOfferInfoModal />}
      </div>
      <div className="input--submit-wrapper">
        <button
          /* disabled={isInputFieldEmpty} */
          className="btn btn--filled btn--submit"
        >
          Elküldés
        </button>
      </div>
      <div className="frame-decoration"></div>
    </form>
  );
};
