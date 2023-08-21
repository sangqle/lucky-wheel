// Import React and ReactDOM
import React from 'react';
import dotenv from 'dotenv';
import { createRoot } from 'react-dom/client';

import "zmp-ui/zaui.css";
import "./css/tailwind.css";
import "./css/app.scss";

// Import App Component
import App from './app';
import appConfig from '../app-config.json';


const result = dotenv.config(); // No need to specify the path if the .env file is in the root directory
if (result.error) {
    console.log('Error loading .env file: ', result.error);
} else {
    console.log('Environment variables loaded from .env file: ', result.parsed);
}

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById('app')!);
root.render(React.createElement(App));
