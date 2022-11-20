import React from 'react';
import reactdom from 'react-dom';
import './index.css';
import App from './App';

reactdom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);