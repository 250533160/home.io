import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter basename="/home.io" >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
