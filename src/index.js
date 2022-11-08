import React from 'react';
import { createRoot } from 'react-dom/client';

//* Redux thing
import { Provider } from 'react-redux';
import { store } from './app/store';

//* Pages and Styles
import App from './App';
import './index.css';

//* Routers
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
