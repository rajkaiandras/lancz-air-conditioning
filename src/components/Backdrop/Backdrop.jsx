import React from 'react';

// styles
import './Backdrop.css';

export const Backdrop = ({ handleHamburgerMenu }) => {
  return <div className="Backdrop" onClick={handleHamburgerMenu}></div>;
};
