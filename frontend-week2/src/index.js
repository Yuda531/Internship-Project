import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <PrimeReactProvider>
    <App />
   </PrimeReactProvider>
  </React.StrictMode>
);

