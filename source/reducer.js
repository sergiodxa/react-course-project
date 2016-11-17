import { combineReducers } from 'redux-immutable';
import {
  Map as map,
  fromJS,
} from 'immutable';


const initialState = fromJS({
  posts: {
    page: 1,
    entities: {},
  },
  comments: {},
  users: {},
});


function postsPageReducer(state = initialState.get('posts').get('page'), action = {}) {
  switch (action.type) {
    case 'SET_POST': {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}


function postsEntitiesReducer(state = initialState.get('posts').get('entities'), action = {}) {
  switch (action.type) {
    case 'SET_POST': {
      return action.payload
        .reduce(
          (posts, post) => posts.set(post.id, map(post)),
          state,
        );
    }
    default: {
      return state;
    }
  }
}


const postsReducer = combineReducers({
  page: postsPageReducer,
  entities: postsEntitiesReducer,
});


function commentsReducer(state = initialState.get('comments'), action = {}) {
  switch (action.type) {
    case 'SET_COMMENTS': {
      return action.payload
        .reduce(
          (comments, comment) => comments.set(comment.id, map(comment)),
          state,
        );
    }
    default: {
      return state;
    }
  }
}


function usersReducer(state = initialState.get('users'), action = {}) {
  switch (action.type) {
    case 'SET_USER': {
      return state.set(action.payload.id, map(action.payload));
    }
    default: {
      return state;
    }
  }
}


const reducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
});


export default reducer;
