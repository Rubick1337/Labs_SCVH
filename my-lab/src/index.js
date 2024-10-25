import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store'; 
import i18n from '../src/I18n/i18n'; 
import { I18nextProvider } from 'react-i18next';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
