import api from './api';


function setPost(post) {
  return {
    type: 'SET_POST',
    payload: post,
  };
}


function setComments(comments) {
  return {
    type: 'SET_COMMENTS',
    payload: comments,
  };
}


function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}


function postsNextPage() {
  return async (dispatch, getState) => {
    const state = getState();
    const currentPage = state.get('posts').get('page');

    const posts = await api.posts.getList(currentPage);

    dispatch(setPost(posts));

    return posts;
  };
}


function loadCommentsForPost(postId) {
  return async (dispatch) => {
    const comments = await api.posts.getComments(postId);
    dispatch(setComments(comments));
    return comments;
  };
}


function loadUser(userId) {
  return async (dispatch) => {
    const user = await api.users.getSingle(userId);
    dispatch(setUser(user));
    return user;
  };
}


export default {
  postsNextPage,
  loadCommentsForPost,
  loadUser,

  setPost,
  setComments,
  setUser,
};
