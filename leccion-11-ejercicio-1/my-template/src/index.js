import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheets/index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
