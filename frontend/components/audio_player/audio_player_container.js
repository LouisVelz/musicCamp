import { connect } from 'react-redux';
import { currentlyPlaying, isPaused, isPlaying } from '../../actions/player_actions'
import Player from './audio_player'
import { togglePlay } from './../../util/player_util'


const mSTP = (state) => {

  const { entities } = state

  return {
    songs: Object.values(entities.songs),
    currentlyPlaying: state.ui.player.song,
    isPlayingAudio: state.ui.player.isPlaying
  };
}

const mDTP = dispatch => {
  return {
    playing: (song) => dispatch(currentlyPlaying(song)),
    isPaused: () => dispatch(isPaused()),
    isPlaying: () => dispatch(isPlaying()),
    togglePlay: () => togglePlay(() => dispatch(isPlaying()), () => dispatch(isPaused()))
  }
}


export default connect(mSTP, mDTP)(Player);