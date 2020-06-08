import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions'
import LoggedMenuBar from './logged_menu_bar'



const mSTP = (state) => {
  const { entities, session } = state
  return {
    errors: state.errors.session,
    currentUser: entities.users[session.currentUser]
  }
}
const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mSTP, mDTP
)(LoggedMenuBar);