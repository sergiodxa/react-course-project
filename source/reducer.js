const initialState = {
  posts: {
    page: 1,
    entities: [],
  },
  comments: [],
  users: {},
};


function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_POST': {
      return Object.assign({}, state, {
        posts: Object.assign({}, state.posts, {
          page: state.posts.page + 1,
          entities: state.posts.entities.concat(action.payload),
        }),
      });
    }
    case 'SET_USER': {
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          [action.payload.id]: action.payload,
        }),
      });
    }
    case 'SET_COMMENTS': {
      return Object.assign({}, state, {
        comments: state.comments.concat(action.payload),
      });
    }
    default: {
      return state;
    }
  }
}


export default reducer;
