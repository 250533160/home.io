import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// import bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <App />,
  document.getElementById('root'),
);
