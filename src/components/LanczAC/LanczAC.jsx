import React, { useEffect, useContext } from 'react';

// Dark Mode Context
import { DarkModeContext } from '../../contexts/DarkModeContext.jsx';

// Components
import { LogosSource } from '../Logos/Logos.jsx';
import { IconsSource } from '../Icons/Icons.jsx';
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';

// Styles
import './LanczAC.css';

export const LanczAC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const root = document.getElementById('root');

  useEffect(() => {
    darkMode
      ? root.classList.add('dark-mode')
      : root.classList.remove('dark-mode');
  }, [root, darkMode]);

  return (
    <div className="LanczAC">
      <LogosSource />
      <IconsSource />
      <Header />
      <div className="main-content"></div>
      <Footer />
    </div>
  );
};
