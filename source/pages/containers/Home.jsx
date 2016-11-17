import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Post from '../../posts/containers/Post';
import Loading from '../../shared/components/Loading';
import Title from '../../shared/components/Title';

import styles from './Page.css';

import actions from '../../actions';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    if (this.props.posts.size === 0) {
      await this.props.actions.postsNextPage();
    }
    this.initialFetch();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async initialFetch() {
    this.setState({
      loading: false,
    });
  }

  handleScroll() {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        await this.props.actions.postsNextPage();
        this.setState({
          loading: false,
          error: null,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    });
  }

  render() {
    return (
      <section name="home" className={styles.section}>
        <Title>
          <FormattedMessage id="title.home" />
        </Title>

        <section className={styles.list}>
          {this.props.posts
            .map(post => (
              <Post
                key={post.get('id')}
                {...post.toJS()}
              />
            )).toArray()
          }
          {this.state.loading && (
            <Loading />
          )}
          {this.state.error && (
            <h4>{this.state.error}</h4>
          )}
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  posts: PropTypes.objectOf(PropTypes.object),
};


function mapStateToProps(state) {
  return {
    posts: state.get('posts').get('entities'),
  };
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
