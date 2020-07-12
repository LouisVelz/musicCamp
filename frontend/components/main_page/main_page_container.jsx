import { connect } from 'react-redux';
import MainPage from './main_page'
import { requestSongs } from './../../actions/song_actions';
import { requestAlbums } from '../../actions/album_actions';

const mSTP = (state) => {
  const { entities, session } = state

  return {
    errors: state.errors.session,
    currentUser: entities.users[session.currentUser],
    songs: Object.values(entities.songs),
    albums: Object.values(entities.albums)
  }
}

const mDTP = dispatch => {
  return {
    fetchSongs: () => dispatch(requestSongs()),
    fetchAlbums: () => dispatch(requestAlbums())
  }
}

export default connect(mSTP, mDTP)(MainPage);