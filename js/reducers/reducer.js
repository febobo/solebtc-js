import {LANGUAGE_CHANGED} from '../actions/Language';
import {REGISTER, LOGIN, LOGOUT} from '../actions/User';

// store
global.localStorage = require('localStorage');
import store from 'store';

const defaultState = {
  language: store.get('language') || 'en',
  authToken: store.get('auth_token')
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LANGUAGE_CHANGED:
      return {...state, language: action.language};
    default:
      return state;
  }
}
