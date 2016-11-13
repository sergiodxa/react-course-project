import React, { Component } from 'react';
import { Link } from 'react-router';

import PostBody from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';
import Comment from '../../comments/containers/Comment.jsx';

import styles from './Page.css';

import api from '../../api.js';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post: {},
      user: {},
      comments: [],
    };
  }

  async componentDidMount() {
    const [
      post,
      comments
    ] = await Promise.all([
      api.posts.getSingle(this.props.params.id),
      api.posts.getComments(this.props.params.id),
    ]);

    const user = await api.users.getSingle(post.userId);

    this.setState({
      loading: false,
      post, user, comments,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <section name="post" className={styles.section}>
        <section className={styles.main}>
          <PostBody
            isMain
            {...this.state.post}
            user={this.state.user}
            comments={this.state.comments}
          />
        </section>
        <section id="comments" className={styles.list}>
          {this.state.comments
            .map(comment =>
              <Comment key={comment.id} {...comment} />
            )
          }
        </section>
      </section>
    );
  }
}


export default Post;
