import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// styles
import './SectionTitle.css';

export const SectionTitle = ({ title, subtitle }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`SectionTitle ${darkMode ? 'dark-mode' : ''}`}>
      <h4 className="title">{title}</h4>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
};
