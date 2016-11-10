import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {
  render() {
    return (
      <section name="home">
        <h1>Home</h1>
        <Link to="/about">
          Go to about
        </Link>
      </section>
    );
  }
}


export default Home;
