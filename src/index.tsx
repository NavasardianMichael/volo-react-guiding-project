import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from 'contexts/theme/Provider';
import { StoreProvider } from 'store/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
