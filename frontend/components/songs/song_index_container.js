import { connect } from 'react-redux';
import { requestSongs } from './../../actions/song_actions';
import SongIndex from './song_index'
import { currentlyPlaying, isPlaying } from '../../actions/player_actions'


const mSTP = (state) => {
  debugger
  return {
    
    songs: Object.values(state.entities.songs),
    errors: state.errors.songs,
    currentlyPlaying: state.ui.player.song
  
  }
}

const mDTP = dispatch => {

  return {
    playing: (song) => dispatch(currentlyPlaying(song)),
    fetchSongs: (albumId) => dispatch(requestSongs(albumId)),
  };
}

export default connect(mSTP, mDTP)(SongIndex)