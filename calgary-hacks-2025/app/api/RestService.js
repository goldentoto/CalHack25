import axios from "axios";
import store from '../store';

// TODO: the axios instances and handle request methods can probably be combined somehow
const API_URL = process.env.REACT_APP_API_URL;
const CHAT_URL = "http://216.123.84.38:8000";

const axiosInstance = axios.create({
  baseURL: API_URL
});

const chatAxiosInstance = axios.create({
    baseURL: CHAT_URL
});

const authHeader = () => {
  const state = store.getState();  // Fetching state directly from the store
  const bearerToken = state.login.token;
  return bearerToken ? { Authorization: `Bearer ${bearerToken}` } : {};
};


const handleRequest = (method, endpoint, data = null, needAuth = true) => {
  const headers = needAuth ? authHeader() : {};
  const options = {
    method: method,
    url: endpoint,
    ...(data && { data }),
    headers
  };

  return axiosInstance(options).catch(handleError);
};

const handleChatRequest = (method, endpoint, data = null, needAuth = true) => {
    const headers = needAuth ? authHeader() : {};
    const options = {
        method: method,
        url: endpoint,
        ...(data && { data }),
        headers
    };

    return chatAxiosInstance(options).catch(handleError);
};

const get = (endpoint, needAuth = true) => handleRequest('get', endpoint, null, needAuth);
const post = (endpoint, data, needAuth = true) => handleRequest('post', endpoint, data, needAuth);
const put = (endpoint, data, needAuth = true) => handleRequest('put', endpoint, data, needAuth);
const patch = (endpoint, data, needAuth = true) => handleRequest('patch', endpoint, data, needAuth);
const remove = (endpoint, needAuth = true) => handleRequest('delete', endpoint, null, needAuth);
const chatPost = (endpoint, data, needAuth = true) => handleChatRequest('post', endpoint, data, needAuth);
const chatGet = (endpoint, needAuth = true) => handleChatRequest('get', endpoint, null, needAuth);
const chatDel = (endpoint, needAuth = true) => handleChatRequest('delete', endpoint, null, needAuth);

const handleError = (error) => {
  console.error('API call error:', error);
  throw error;
};

export default { get, post, put, patch, delete: remove, chatPost, chatGet, chatDel };

// Usage Example:
// RestService.get('/public/data', false)  // `false` indicates no auth headers needed
//      .then(response => { // Process response
//      }).catch(error => console.error('Failed to fetch public data:', error));
//

// RestService.post('/private/data', newData) // Authentication headers included by default
//     .then(() => {  // Process response
//     }).catch(error => console.error('Failed to post private data:', error));
