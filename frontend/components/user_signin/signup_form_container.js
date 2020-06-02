import { connect } from 'react-redux';
import { signup } from './../../actions/session_actions'
import SignUpForm from './signup_form'

const mSTP = (state) => ({
  user: {username: '', email: '', password: ''}
});

const mDTP = dispatch => ({
  signup: (formUser) => dispatch(signup(formUser))
})

export default connect(mSTP, mDTP)(SignUpForm)