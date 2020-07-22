import { connect } from 'react-redux';
import { requestUser } from './../../actions/users_actions'
import UserPage from './user'
import { requestAlbums } from '../../actions/album_actions';




const mSTP = (state, ownProps) => {
  const { entities, session } = state
  return {
    errors: state.errors.session,
    artist: state.entities.users[ownProps.match.params.userId],
    albums: Object.values(entities.albums)
  }
}

const mDTP = (dispatch) => {
  return{
    fetchUser: (userId) => dispatch(requestUser(userId)),
    fetchAlbums: (userId) => dispatch(requestAlbums(userId))
  }
}

export default connect(
  mSTP, mDTP
)(UserPage);