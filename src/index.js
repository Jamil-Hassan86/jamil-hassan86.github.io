import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root')
);


