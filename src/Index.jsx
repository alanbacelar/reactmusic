require('./resources/styles/main.less');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import App from './App.jsx';

render(
  <App />,
  document.getElementById('app')
);
