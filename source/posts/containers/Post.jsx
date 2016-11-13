import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedPlural } from 'react-intl';

import styles from './Post.css';

import api from '../../api';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: props.user || null,
      comments: props.comments || null,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    if (!!this.state.user && !!this.state.comments) return this.setState({ loading: false });

    const [
      user,
      comments,
    ] = await Promise.all([
      !this.state.user ? api.users.getSingle(this.props.userId) : Promise.resolve(null),
      !this.state.comments ? api.posts.getComments(this.props.id) : Promise.resolve(null),
    ]);

    return this.setState({
      loading: false,
      user: user || this.state.user,
      comments: comments || this.state.comments,
    });
  }

  render() {
    return (
      <article id={`post-${this.props.id}`} className={styles.post}>
        <h2 className={styles.title}>
          <Link to={`/post/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <p className={styles.body}>
          {this.props.body}
        </p>
        {!this.state.loading && (
          <div className={styles.meta}>
            <Link to={`/user/${this.state.user.id}`} className={styles.user}>
              {this.state.user.name}
            </Link>
            <Link to={`/post/${this.props.id}#comments`} className={styles.comments}>
              <FormattedPlural
                value={this.state.comments.length}
                one={
                  <FormattedMessage id="post.meta.comment" />
                }
                other={
                  <FormattedMessage
                    id="post.meta.comments"
                    values={{ amount: this.state.comments.length }}
                  />
                }
              />
            </Link>

            {!this.props.isMain && (
              <Link to={`/post/${this.props.id}`}>
                <FormattedMessage id="post.meta.readMore" />
              </Link>
            )}
          </div>
        )}
      </article>
    );
  }
}


Post.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  isMain: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

Post.defaultProps = {
  isMain: false,
  user: null,
  comments: null,
};


export default Post;
