import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

declare global {
  interface Window {
    Evergage: any;
  }
}
window.Evergage = window.Evergage;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


