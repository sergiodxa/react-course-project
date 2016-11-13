import React, { Component } from 'react';
import { Link } from 'react-router';

import Title from '../../shared/components/Title.jsx';


class Error404 extends Component {
  render() {
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
}


export default Error404;
