import { RECEIVE_CURRENT_USER } from './../actions/session_actions'
import { RECEIVE_USERS, RECEIVE_USER } from './../actions/users_actions'


const usersReducer = (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
      return Object.assign({}, { [action.currentUser.id]: action.currentUser })
    default:
      return state
  }
}

export default usersReducer;