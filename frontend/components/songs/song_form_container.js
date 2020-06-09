import { connect } from 'react-redux';
import { createSong } from './../../actions/song_actions';
import SongForm from './song_form'

const mSTP = () => ({
  song: {
  title: "",
  track_num: "",
  description: "",
  album_id: "",
  songFile: null }
})

const mDTP = dispatch => ({
  createSong: (formData) => dispatch(createSong(formData))
})

export default connect(mSTP, mDTP)(SongForm);
