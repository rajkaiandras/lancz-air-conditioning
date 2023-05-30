import React from 'react';
import ReactDOM from 'react-dom/client';

// dark mode context provider
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';

// web app component
import { LanczAC } from './LanczAC/LanczAC.jsx';

// styles
import './styles/shared/shared.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <LanczAC />
    </DarkModeProvider>
  </React.StrictMode>
);
