import React from 'react';
import { createRoot } from 'react-dom/client';

//* Redux thing
import { Provider } from 'react-redux';
import { default as store } from './store';

//* Pages and Styles
import App from './App';
import './index.css';

//* Routers
import { BrowserRouter } from 'react-router-dom';

//! DO NOT DELETE THAMIEM'S WRAPPER ELEMENT
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* thamiem-n */} 
        <App />
        {/* thamiem-n */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
