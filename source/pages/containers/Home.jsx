import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Post from '../../posts/containers/Post';
import Loading from '../../shared/components/Loading';
import Title from '../../shared/components/Title';

import styles from './Page.css';

import api from '../../api';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      page: 1,
      error: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.initialFetch();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async initialFetch() {
    const posts = await api.posts.getList(this.state.page);
    this.setState({
      posts,
      page: this.state.page + 1,
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
        const posts = await api.posts.getList(this.state.page);

        this.setState({
          posts: this.state.posts.concat(posts),
          page: this.state.page + 1,
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
          {this.state.posts
            .map(post => <Post key={post.id} {...post} />)
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


export default Home;
