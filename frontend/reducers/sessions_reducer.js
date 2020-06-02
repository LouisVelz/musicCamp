import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';
// import LOGOUT_USER from './../actions/session_actions';

const _nullSession = {
  user: null
}

const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState)
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return Object.assign({}, { "id": action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return Object.assign({},{'id': _nullSession});
    default:
      return oldState
  }
}

export default sessionReducer;