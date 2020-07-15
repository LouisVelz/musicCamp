import { connect } from 'react-redux';
import { login } from './../../actions/session_actions'
import LogInForm from './login_form'
import { closeModal, openModal } from "./../../actions/modal_actions";

const mSTP = (state, ownProps) => {

  return {
    errors: state.errors.session,
    user: { email: "", password: "" },
    demoUser: { email: "demo_user@gmail.com", password: "hunter12" },
    modal: state.modal,
  };
};

const mDTP = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
});

export default connect(mSTP, mDTP)(LogInForm)