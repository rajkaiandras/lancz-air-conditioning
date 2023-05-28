import React from 'react';
import ReactDOM from 'react-dom/client';

// Dark Mode Context Provider
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';

// Components
import { LanczAC } from './components/LanczAC/LanczAC.jsx';

// Styles
import './styles/shared/shared.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <LanczAC />
    </DarkModeProvider>
  </React.StrictMode>
);
