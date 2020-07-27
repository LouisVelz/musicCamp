import { connect } from 'react-redux';
import { currentlyPlaying } from '../../actions/player_actions'
import Player from './audio_player'



const mSTP = (state) => {

  const { entities } = state

  return {
    songs: Object.values(entities.songs),
    currentlyPlaying: state.ui.player
  };
}

const mDTP = dispatch => {
  return { 
    playing: (song) => dispatch(currentlyPlaying(song))
  }
}


export default connect(mSTP, mDTP)(Player);