import React from 'react';
import { Link } from 'react-router';

import Title from '../../shared/components/Title';


function Error404() {
  return (
    <section name="home">
      <Title>
        Error 404
      </Title>
      <Link to="/">
        Go back to home
      </Link>
    </section>
  );
}


export default Error404;
