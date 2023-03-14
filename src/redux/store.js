import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import screensReducer from './reducers/screensReducer';

const reducers = {
  screensReducer,
};

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    // applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;