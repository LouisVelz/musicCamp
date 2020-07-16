import { connect } from 'react-redux';
import { requestUser } from './../../actions/users_actions'
import UserPage from './user'




const mSTP = (state, ownProps) => {
  const { entities, session } = state
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = (dispatch) => {
  return{
    fetchUser: (userId) => dispatch(requestUser(userId)),
  }
}

export default connect(
  mSTP, mDTP
)(UserPage);