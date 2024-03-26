import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-diawlmgp0gmfgjtb.us.auth0.com"
    clientId="5vT9RNS2ses70iddKwDmYOTO7ee5OLVm"
    authorizationParams={{
      redirect_uri: 'http://localhost:3001/user/'
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>,
);

reportWebVitals();
