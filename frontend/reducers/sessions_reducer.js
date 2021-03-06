import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';
// import LOGOUT_USER from './../actions/session_actions';

const _nullSession = {
  currentUser: null
}

const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
          return Object.assign({}, { "currentUser": action.currentUser.id});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, _nullSession);
    default:
      return oldState
  }
}

export default sessionReducer;