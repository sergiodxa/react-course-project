import React from 'react';
import { Link } from 'react-router';


const header = (
  <header>
    <h1>
      Mi primera app con React
    </h1>

    <nav role="navigation">
      <Link to="/">Home</Link>
    </nav>
  </header>
);


export default header;
