import { connect } from 'react-redux';

import UserPage from './user'




const mSTP = (state) => {
  const { entities, session } = state
  return {
    errors: state.errors.session,
    currentUser: entities.users[session.currentUser]
  }
}

export default connect(
  mSTP, null
)(UserPage);