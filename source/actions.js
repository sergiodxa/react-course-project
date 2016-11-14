function setPost(post) {
  return {
    type: 'SET_POST',
    payload: post,
  };
}


export default {
  setPost,
};
