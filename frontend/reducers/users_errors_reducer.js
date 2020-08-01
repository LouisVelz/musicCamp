import { RECEIVE_USER_ERRORS, RECEIVE_USERS, RECEIVE_USER } from './../actions/users_actions'
let _defaultErrors = []

const usersErrorsReducer = (errors = _defaultErrors, action) => {

  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    case RECEIVE_USER:
      return _defaultErrors
    case RECEIVE_USERS:
      return _defaultErrors
    default:
      return _defaultErrors
  }
}

export default usersErrorsReducer;