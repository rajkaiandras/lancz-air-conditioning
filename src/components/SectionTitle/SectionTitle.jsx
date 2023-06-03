import React, { useContext } from 'react';

// dark mode context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// styles
import './SectionTitle.css';

export const SectionTitle = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`SectionTitle ${darkMode ? 'dark-mode' : ''}`}>
      <h4 className="main-title">Árajánlat</h4>
      <h2 className="subtitle">
        Kérje ajánlatunkat ingyenes<br></br> helyszíni felméréssel
      </h2>
    </div>
  );
};
