import { connect } from 'react-redux';
import { createSong } from './../../actions/song_actions';
import SongForm from './song_form'
import { requestAlbum } from '../../actions/album_actions';

const mSTP = (state) => ({
  song: {
  title: "",
  track_num: "",
  description: "",
  album_id: "",
  songFile: null,
  songPhoto: null },

  albumErrors: state.errors.albums,
  songErrors: state.errors.songs,

})

const mDTP = dispatch => ({
  createSong: (formData) => dispatch(createSong(formData)),
  fetchAlbum: (albumId) => dispatch(requestAlbum(albumId))
})

export default connect(mSTP, mDTP)(SongForm);

