import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from './../actions/session_actions'

let _defaultErrors = []

const sessionErrorsReducer = (errors = _defaultErrors, action) => {

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return _defaultErrors
    default:
      return errors
  }
}

export default sessionErrorsReducer;