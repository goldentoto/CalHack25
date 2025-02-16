'use client'

import axios from 'axios';
import store from '../store';
import { logOut } from '../actions/authActions';


axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('tokenExpiry');
    const currentTime = Date.now() / 1000;

    if (token && expiry && currentTime >= parseInt(expiry)) {
      // Token has expired
      store.dispatch(logOut());
      // TODO: redirect to login page

      return Promise.reject(new Error('Token has expired'));
    }

    // If the token is valid, or there is no token (unauthenticated routes), continue with the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// TODO: set up a response interceptor to handle global errors like 401, 500 etc
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Global error handling
//     if (error.response && error.response.status === 401) {
//       // Token is no longer valid
//       store.dispatch(logOut());
//       // Handle the logout process here
//     }
//     return Promise.reject(error);
//   }
// );

// Export the configured axios instance
export default axios;
