import React, { Component } from 'react';
import { Link } from 'react-router';

import api from '../../api.js';

import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      page: 1,
    };
  }

  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page);
    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false,
    });
  }

  render() {
    return (
      <section name="home">
        <h1>Home</h1>

        <section>
          {this.state.loading && (
            <Loading />
          )}
          {this.state.posts
            .map(post => <Post key={post.id} {...post} />)
          }
        </section>
      </section>
    );
  }
}


export default Home;
