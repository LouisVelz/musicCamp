import { connect } from 'react-redux';
import { requestSongs } from './../../actions/song_actions';
import SongIndex from './song_index'
import { currentlyPlaying } from '../../actions/player_actions';

const mSTP = (state) => {

  return {
    
    songs: Object.values(state.entities.songs),
    errors: state.errors.songs
    
  }
}

const mDTP = dispatch => {
  return{
    currentlyPlaying: (song) => dispatch(currentlyPlaying(song))
  }
}

export default connect(mSTP, mDTP)(SongIndex)