import React from 'react';
import { Match, Miss, Link } from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx';
import Error404 from './Error404.jsx';


function Pages() {
  return (
    <main role="applcation">
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      <Match
        pattern="/about"
        exactly
        component={About}
      />
      <Miss
        component={Error404}
      />
    </main>
  );
}


export default Pages;
