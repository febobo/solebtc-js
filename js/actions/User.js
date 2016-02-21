import request from 'superagent';
import store from 'store';
import URI from 'urijs';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

const v1 = 'http://localhost:3000/v1';

/* Register */
export function registerRequest() {
  // TODO: show requesting indicator
  return {
    type: REGISTER_REQUEST
  };
}

export function registerSuccess(email) {
  // TODO: show success alert, login, redirect
  return {
    type: REGISTER_SUCCESS,
    email
  };
}

export function registerError(error) {
  // TODO: show error alert
  return {
    type: REGISTER_ERROR,
    error
  };
}

export function register(email, bitcoin_address, referer_id) {
  return (dispatch) => {
    dispatch(registerRequest());

    let data = {
      email: email, 
      bitcoin_address: bitcoin_address, 
      referer_id: referer_id
    };

    request
      .post(v1URL('/users'))
      .send(data)
      .end((err, res) => {
        switch (res.statusCode) {
          case 200:
            dispatch(registerSuccess(email));
            break;
          case 400:
          case 409:
            dispatch(registerError(JSON.parse(res.text).error));
            break;
          default:
            console.error('not handle other errors');
            break;
        }
      });
  };
}

/* Login */
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(authToken) {
  return {
    type: LOGIN_SUCCESS,
    authToken
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

export function login(email) {
  return (dispatch) => {
    dispatch(loginRequest());

    let url = new URI(v1 + '/auth_tokens');

    request
      .post(url.toString())
      .send({ email: email })
      .end((err, res) => {
        switch (res.statusCode) {
          case 201:
            let authToken = JSON.parse(res.text).auth_token;
            store.set('auth_token', authToken);
            dispatch(loginSuccess(authToken));
            break;
          case 400:
            dispatch(loginError('Request error'));
            break;
          case 403:
            dispatch(loginError('Your account is banned'));
            break;
          case 404:
            dispatch(loginError(JSON.parse(res.text).error));
            break;
          default:
            dispatch(loginError('System error'));
            break;
        }
      });
  };
}

/* Logout */
export function logout() {
  let url = new URI(v1 + '/auth_tokens');

  // request delete auth token 
  request
    .del(url.toString())
    .set('Auth-Token', store.get('auth_token'))
    .end((err, res) => {
      if (err) {
        console.error('logout error:', err);
      }
    });

  // remove from local storage
  store.remove('auth_token');

  return {
    type: LOGOUT
  }
}
