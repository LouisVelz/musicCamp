import { connect } from 'react-redux';
import MainPage from './main_page'
import { requestSongs } from './../../actions/song_actions';

const mSTP = (state) => {
  const { entities, session } = state

  return {
    errors: state.errors.session,
    currentUser: entities.users[session.currentUser],
    songs: Object.values(entities.songs)
  }
}

const mDTP = dispatch => {
  return {
    fetchSongs: () => dispatch(requestSongs())
  }
}

export default connect(mSTP, mDTP)(MainPage);