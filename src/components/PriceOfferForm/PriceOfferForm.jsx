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

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isOfferSent, setIsOfferSent] = useState(false);

  const [offerInfoVisibility, setOfferInfoVisibility] = useState(false);

  // form submit handler
  const handlePriceOfferSubmit = (e) => {
    e.preventDefault();
    const url = 'https://lanczklima.hu/api.php';

    // capture html form (name attribute values) as an object
    const priceOfferFormData = new FormData(e.target);

    // transforms form data key-value pairs into an object
    const formDataEntriesObject = Object.fromEntries(
      priceOfferFormData.entries()
    );

    const postData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataEntriesObject),
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        setIsPending(false);
        setIsOfferSent(true);
        setError(null);

        setTimeout(() => {
          setIsOfferSent(false);
        }, 3000);

        console.log('Response object is the following:', response);
      } catch (catchError) {
        console.log('Catch error is the following:', catchError);

        setIsPending(false);
        setIsOfferSent(false);
        setError(
          'Sajnos nem tudtuk elküldeni az ajánlatkérést. Legyen szíves telefonos kapcsolaton érdeklődni munktársunktól. Megértését köszönjük.'
        );
        console.log(error);
      }
    };

    postData();

    resetInputFields();
  };

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
        {!isPending && (
          <button className="btn btn--filled btn--submit">Küldés</button>
        )}
        {isPending && (
          <button className="btn btn--filled btn--submit">
            Folyamatban...
          </button>
        )}
      </div>
      {isOfferSent && (
        <div className="offer-sent-modal">
          <p className="modal__text">
            Ajánlatkérését megkaptuk. Munkatársunk hamarosan felveszi Önnel a
            kapcsolatot.
          </p>
        </div>
      )}
      <div className="frame-decoration"></div>
    </form>
  );
};
