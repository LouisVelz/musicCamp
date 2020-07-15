import { connect } from 'react-redux';
import { login } from './../../actions/session_actions'
import LogInModal from './login_modal'
import { closeModal, openModal } from "./../../actions/modal_actions";

const mSTP = (state) => {

  return {
    errors: state.errors.session,
    user: { email: "", password: "" },
    modal: state.modal,
  };
};

const mDTP = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LogInModal)