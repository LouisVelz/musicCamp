import { connect } from 'react-redux';
import SongIndexItem from './song_index_item'
import { currentlyPlaying} from '../../actions/player_actions'


const mSTP = (state) => {
  debugger
  return {
    errors: state.errors.songs,
    currentlyPlaying: state.ui.player.song,
    isPlaying: state.ui.player.isPlaying

  }
}

const mDTP = dispatch => {

  return {
    playing: (song) => dispatch(currentlyPlaying(song)),
  };
}

export default connect(mSTP, mDTP)(SongIndexItem)