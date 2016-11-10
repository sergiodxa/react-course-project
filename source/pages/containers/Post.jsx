import React, { Component } from 'react';
import { Link } from 'react-router';


class Post extends Component {
  render() {
    return (
      <section name="home">
        <h1>Post</h1>
        <Link to="/">
          Go to home
        </Link>
      </section>
    );
  }
}


export default Post;
