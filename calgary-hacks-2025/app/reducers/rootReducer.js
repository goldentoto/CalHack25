import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  // Future reducers can be added here
  login: loginReducer,
});

export default rootReducer;
