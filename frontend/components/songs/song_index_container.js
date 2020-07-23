import { connect } from 'react-redux';
import { requestSongs } from './../../actions/song_actions';
import SongIndex from './song_index'

const mSTP = (state) => {

  return {
    
    // songs: Object.values(state.entities.songs),
    errors: state.errors.songs
    
  }
}

const mDTP = dispatch => {
  return null
  //  {
  //   fetchSongs: () => dispatch(requestSongs())
  // }
}

export default connect(mSTP, mDTP)(SongIndex)