import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// styles
import './AboutUs.css';

export const AboutUs = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className="AboutUs" id="section-about-us">
      <div className={`about-us-container ${darkMode ? 'dark-mode' : ''}`}>
        About Us
      </div>
    </section>
  );
};
