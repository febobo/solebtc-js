import {LANGUAGE_CHANGED} from '../actions/Language';
import {REGISTER, LOGIN, LOGOUT} from '../actions/User';

const defaultState = {
  language: 'en',
  loggedIn: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LANGUAGE_CHANGED:
      return {...state, language: action.language};
    default:
      return state;
  }
}
