import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedPlural } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './Post.css';

import actions from '../../actions';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    if (this.props.user && this.props.comments.size > 0) {
      return this.setState({ loading: false });
    }

    this.props.actions.loadUser(this.props.userId);
    this.props.actions.loadCommentsForPost(this.props.id);

    return this.setState({ loading: false });
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
            {this.props.user && (
              <Link to={`/user/${this.props.user.id}`} className={styles.user}>
                {this.props.user.get('name')}
              </Link>
            )}
            <Link to={`/post/${this.props.id}#comments`} className={styles.comments}>
              <FormattedPlural
                value={this.props.comments.size}
                one={
                  <FormattedMessage id="post.meta.comment" />
                }
                other={
                  <FormattedMessage
                    id="post.meta.comments"
                    values={{ amount: this.props.comments.size }}
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
    size: PropTypes.number,
    get: PropTypes.func,
  }),
  comments: PropTypes.objectOf(
    PropTypes.object,
  ),
  actions: PropTypes.objectOf(PropTypes.func),
};

Post.defaultProps = {
  isMain: false,
  user: null,
  comments: null,
};


function mapStateToProps(state, props) {
  return {
    comments: state
      .get('comments')
      .filter(comment => comment.get('postId') === props.id),
    user: state
      .get('users')
      .get(props.userId),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);
