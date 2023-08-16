import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import App from './App.jsx';
import { ProviderDatalar, ProviderDate } from './component/state/stete.jsx'; 

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderDate>
        <ProviderDatalar>
          <App />
        </ProviderDatalar>
      </ProviderDate>
    </BrowserRouter>
  </React.StrictMode>
)
