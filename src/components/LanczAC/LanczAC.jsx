import React from 'react';

// Components
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';

// Styles
import './LanczAC.css';

export const LanczAC = () => {
  return (
    <div className="LanczAC">
      <Header />
      <div className="main-content">Main Content</div>
      <Footer />
    </div>
  );
};
