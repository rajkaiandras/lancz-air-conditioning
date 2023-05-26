import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import { LanczAC } from './components/LanczAC/LanczAC.jsx';

// Styles
import './styles/shared/shared.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanczAC />
  </React.StrictMode>
);
