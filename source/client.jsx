import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';


import Pages from './pages/index';


render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('render-target'),
);
