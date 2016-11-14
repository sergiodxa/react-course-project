import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducer';


const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    createLogger(),
  ),
);


export default store;
