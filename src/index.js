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
            domain="dev-8yrpla1b.eu.auth0.com"
            clientId="hrZijwntbyWTUL0kx0AsxQnC0oNaYGBk"
            redirectUri={window.location.origin}
        >
            <App/>
        </Auth0Provider>
);

reportWebVitals();
