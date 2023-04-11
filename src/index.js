import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './responsive.css';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
      <React.StrictMode>
          <BrowserRouter basename="EduSite">
          <App />
          </BrowserRouter>
      </React.StrictMode>



);
