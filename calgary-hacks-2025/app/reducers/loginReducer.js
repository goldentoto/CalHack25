import { LOGIN, LOGOUT, LOGIN_FAILURE } from './../actions/actionTypes';

const initialState = {
  loggedIn: false,
  role: null,
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true, role: action.role, token: action.token, error: null };
    case LOGOUT:
      return { ...state, loggedIn: false, role: null, token: null, error: null };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
