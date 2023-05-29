import React from 'react';

// Styles
import './Backdrop.css';

export const Backdrop = ({ handleHamburgerMenu }) => {
  return <div className="Backdrop" onClick={handleHamburgerMenu}></div>;
};
