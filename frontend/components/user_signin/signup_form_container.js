import { connect } from 'react-redux';
import { signup } from './../../actions/session_actions'
import SignUpForm from './signup_form'
import { openModal, closeModal } from './../../actions/modal_actions'

const mSTP = (state) => ({
  errors: state.errors.session,
  user: {username: '', email: '', password: ''}
});

const mDTP = dispatch => ({
  signup: (formUser) => dispatch(signup(formUser)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(SignUpForm)