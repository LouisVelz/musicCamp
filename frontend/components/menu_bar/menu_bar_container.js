import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions'
import MenuBar from './menu_bar'


const mSTP = (state) => {
  const { entities, session } = state
  return {
    currentUser: entities.users[session.id]
  }
}
const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mSTP, mDTP
)(MenuBar);