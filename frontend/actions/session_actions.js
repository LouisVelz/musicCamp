import { postUser, postSession, deleteSession } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}
const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const signup = formUser => dispatch => {
  
  return postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const login = formUser => dispatch => {
  
  return postSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const logout = () => dispatch => {
  
  return deleteSession().then(
    () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}