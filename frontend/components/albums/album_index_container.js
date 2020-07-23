import { connect } from 'react-redux';
import { requestAlbums } from './../../actions/album_actions';
import AlbumIndex from './album_index'

const mSTP = (state) => {

  return {

    // albums: Object.values(state.entities.albums),
    errors: state.errors.albums

  }
}

const mDTP = dispatch => {
  return null
  //  {
  //   fetchAlbums: () => dispatch(requestAlbums())
  // }
}

export default connect(mSTP, mDTP)(AlbumIndex)