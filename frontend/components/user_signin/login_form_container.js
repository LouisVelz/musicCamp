import { connect } from 'react-redux';
import { login } from './../../actions/session_actions'
import LogInForm from './login_form'

const mSTP = (state) => ({
  errors: state.errors.session,
  user: { email: '', password: '' }
});

const mDTP = dispatch => ({
  login: (formUser) => dispatch(login(formUser))
})

export default connect(mSTP, mDTP)(LogInForm)