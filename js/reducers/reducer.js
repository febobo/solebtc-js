import {LANGUAGE_CHANGED} from '../actions/Language';
import {
  LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/User';

// store
global.localStorage = require('localStorage');
import store from 'store';

const defaultState = {
  language: store.get('language') || 'en',
  login: {
    isRequesting: false,
    error: '',
  },
  user: store.get('user'),
  authToken: store.get('auth_token')
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LANGUAGE_CHANGED:
      return {...state, language: action.language};

    case LOGIN_REQUEST:
      return {...state, login: {isRequesting: true}};
    case LOGIN_SUCCESS:
      return {...state, login: {}, authToken: action.authToken};
    case LOGIN_ERROR:
      return {...state, login: {error: action.error}};

    case LOGOUT:
      return {...state, authToken: undefined, user: undefined};

    default:
      return state;
  }
}
