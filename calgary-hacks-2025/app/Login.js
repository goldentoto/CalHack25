import React, { useState } from 'react';
import styles from './../../css/Login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { logIn, logOut, UnregisteredException } from './../../actions';
import RestService from '../../api/RestService';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
        // Dispatch the async action with username and password
        await dispatch(logIn(username, password));
        setLoading(false);
        localStorage.setItem('isLoggedIn', loggedIn);
    } catch (error) {
        if (error instanceof UnregisteredException) {
            const regToken = localStorage.getItem('regToken');
            const id = localStorage.getItem('id');
            navigate("/confirm_email?token=" +regToken+"&id="+id);
            setLoading(false);
            return;
        }
        if(error?.response?.status === 401) setMessage('Login failed. Please check your credentials.');
        else if (error?.message === "Network Error") setMessage('Error Connecting to the Network.');
        else setMessage('Something went wrong. Please try again later');
        setLoading(false);
    }
  };
  return (
    <div className="col-md-12 mt-10">
      <div className={`${styles.cardContainer} ${styles.card}`}>
        {/* TODO: add image from VUE */}
        {loggedIn ? (navigate("/home")) : (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className={styles.loginLabel} htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* ErrorMessage component equivalent can be conditional rendering here */}
            </div>
            <div className="form-group">
              <label className={styles.loginLabel} htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* ErrorMessage component equivalent can be conditional rendering here */}
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
