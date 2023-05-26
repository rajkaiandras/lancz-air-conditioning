import React from 'react';
import { useState } from 'react';

// Theme Context
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

// Components
import { LogosSource } from '../Logos/Logos.jsx';
import { IconsSource } from '../Icons/Icons.jsx';
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';

// Styles
import './LanczAC.css';

export const LanczAC = () => {
  // Theme Picker
  const [theme, setTheme] = useState('light mode');
  const themePicker = () => {
    switch (theme) {
      case 'light mode':
        setTheme('dark mode');
        break;
      case 'dark mode':
        setTheme('light mode');
        break;
      default:
        setTheme('light mode');
    }
  };

  return (
    <div className="LanczAC">
      <LogosSource />
      <IconsSource />
      <ThemeContext.Provider value={theme}>
        <Header themePicker={themePicker} />
        <div className="main-content"></div>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};
