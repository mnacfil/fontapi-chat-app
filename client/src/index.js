import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/App/context';
import {AccountProvider} from './context/Account/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AccountProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AccountProvider>
);

