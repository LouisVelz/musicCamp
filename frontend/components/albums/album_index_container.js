import { connect } from 'react-redux';
import AlbumIndex from './album_index'

const mSTP = (state) => {

  return {
    errors: state.errors.albums

  }
}

const mDTP = dispatch => {
  return null

}

export default connect(mSTP, mDTP)(AlbumIndex)