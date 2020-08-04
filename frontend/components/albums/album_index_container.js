import { connect } from 'react-redux';
import AlbumIndex from './album_index'
import { requestAlbums } from '../../actions/album_actions';

const mSTP = (state) => {

  return {
    errors: state.errors.albums,
    albums: Object.values(state.entities.albums)
  }
}

const mDTP = dispatch => {
  return {
    fetchAlbums: (userId) => dispatch(requestAlbums(userId))
  }

}

export default connect(mSTP, mDTP)(AlbumIndex)