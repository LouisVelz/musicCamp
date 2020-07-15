import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions'
import MenuBar from './menu_bar'
import { openModal } from '../../actions/modal_actions';



const mSTP = (state) => {
  const { entities, session } = state
  return {
    errors: state.errors.session,
    currentUser: entities.users[session.currentUser]
  }
}
const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(
  mSTP, mDTP
)(MenuBar);