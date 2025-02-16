import { LOGIN, LOGOUT, LOGIN_FAILURE } from './actionTypes';
import axios from './../api/axiosConfig';
import { jwtDecode } from 'jwt-decode';
import RestService from './../api/RestService';

const API_URL = process.env.REACT_APP_API_URL+'/auth/';

// Synchronous Action Creators
export const logInSuccess = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('tokenExpiry', jwtDecode(data.token).exp.toString());
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return {
        type: LOGIN,
        token: data.token,
        role: data.authorities[0].authority
    };
};

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    delete axios.defaults.headers.common['Authorization'];
    return { type: LOGOUT };
};

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logIn = (username, password) => {
    return (dispatch) => {
        return RestService.post('/auth/login', { username, password }, false)
            .then(response => {
                const { data } = response;
                if (response.status === 200 && data.token) {
                    dispatch(logInSuccess(data));
                } else {
                    dispatch(loginFailure('Login failed. No token received.'));
                }
            })
            .catch(error => {
                dispatch(loginFailure(error.message));
                throw error;
            });
    };
};
