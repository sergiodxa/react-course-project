import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {
  render() {
    return (
      <section name="home">
        <h1>Home</h1>
        <Link to="/post/1">
          Go to post
        </Link>
        <Link to="/user/1">
          Go to profile
        </Link>
      </section>
    );
  }
}


export default Home;
