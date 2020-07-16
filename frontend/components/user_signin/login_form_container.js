import { connect } from 'react-redux';
import { login } from './../../actions/session_actions'
import LogInForm from './login_form'
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {

  return {
    errors: state.errors.session,
    user: { email: "", password: "" },
    demoUser: { email: "new_artist@gmail.com", password: "hunter12" },
    modal: state.modal,
  };
};

const mDTP = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(LogInForm)