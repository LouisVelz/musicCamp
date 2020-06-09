import { connect } from 'react-redux';
import { requestSongs } from './../../actions/song_actions';
import SongIndex from './song_index'

const mSTP = (state) => {
  debugger
  return {
    
    //Object.values if jbuilder doesn't export array
    songs: Object.values(state.entities.songs)
  }
}

const mDTP = dispatch => {
  debugger
  return {
    fetchSongs: () => dispatch(requestSongs())
  }
}

export default connect(mSTP, mDTP)(SongIndex)