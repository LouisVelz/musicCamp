import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions'
import MenuBar from './menu_bar'
import { openModal } from '../../actions/modal_actions';



const mSTP = (state,) => {
  return {
    errors: state.errors.session
  }
}
const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal())
  }
}

export default connect(
  mSTP, mDTP
)(MenuBar);