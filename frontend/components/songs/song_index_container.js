import { connect } from 'react-redux';
import { requestSongs } from './../../actions/song_actions';
import SongIndex from './song_index'
import { currentlyPlaying } from '../../actions/player_actions'


const mSTP = (state) => {
  debugger
  return {
    
    songs: Object.values(state.entities.songs),
    errors: state.errors.songs
    
  }
}

const mDTP = dispatch => {
  debugger
  return {
    // fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
    currentyPlaying: (song) => dispatch(currentlyPlaying(song)),
    fetchSongs: (albumId) => dispatch(requestSongs(albumId)),
  };
}

export default connect(mSTP, mDTP)(SongIndex)