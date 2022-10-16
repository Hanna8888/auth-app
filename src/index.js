import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Auth0Provider
            domain="dev-3gk1lddq.eu.auth0.com"
            clientId="pJ1Hx6rTBOlseZ8oEIl90J2qyYj0hi4S"
            redirectUri="https://hanna8888.github.io/auth-app/"
        >
            <App/>
        </Auth0Provider>
);

reportWebVitals();
