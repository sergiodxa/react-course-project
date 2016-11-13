import React, { Component } from 'react';
import { Link } from 'react-router';

import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';
import Title from '../../shared/components/Title.jsx';

import styles from './Page.css';

import api from '../../api.js';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      posts: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const [
      user,
      posts,
    ] = await Promise.all([
      api.users.getSingle(this.props.params.id),
      api.users.getPosts(this.props.params.id),
    ]);

    this.setState({
      user,
      posts,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <section name="home">
        <Title>
          Profile of {this.state.user.name}
        </Title>

        <section id="profile" className={styles.main}>
          <fieldset className={styles.field}>
            <legend>Basic info</legend>
            <label>Email:</label>
            <input type="email" value={this.state.user.email} disabled />
          </fieldset>

          <fieldset className={styles.field}>
            <legend>Address</legend>
            <address>
              {this.state.user.address.street}<br />
              {this.state.user.address.suite}<br />
              {this.state.user.address.city}<br />
              {this.state.user.address.zipcode}<br />
            </address>
          </fieldset>
        </section>
        <section className={styles.list}>
          {this.state.posts
            .map(post => <Post key={post.id} {...post} user={this.state.user} />)
          }
        </section>
      </section>
    );
  }
}


export default Profile;
