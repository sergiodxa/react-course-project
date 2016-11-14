const initialState = {
  posts: {
    page: 1,
    entities: [],
  },
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
    default: {
      return state;
    }
  }
}


export default reducer;
