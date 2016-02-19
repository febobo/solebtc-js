export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function register(email, bitcoin_address, referer_id) {
  // TODO: ajax
  return {
    type: REGISTER,
    email,
    bitcoin_address,
    referer_id
  }
}

export function login(email) {
  // TODO: ajax
  return {
    type: LOGIN,
    email
  }
}

export function logout(authToken) {
  // TODO: ajax
  return {
    type: LOGOUT,
    authToken
  }
}
