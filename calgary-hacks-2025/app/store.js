import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;

// SOURCE:
// https://www.bezkoder.com/react-redux-jwt-auth/
