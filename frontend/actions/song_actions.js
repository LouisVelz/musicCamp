import * as SongApiUtil from './../util/songs_api_util'

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = "RECEIVE_SONG";
export const DELETE_SONG = 'DELETE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_ERRORS'

const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs
  }
}
const receiveSong = (song) => {

  return {
    type: RECEIVE_SONG,
    song
  }
}

const removeSong = (songId) => {
  return {
    type: DELETE_SONG,
    songId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errors
  }
}


export const requestSongs = () => dispatch => {

  return SongApiUtil.fetchSongs().then(
    songs => dispatch(receiveSongs(songs)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const requestSong = (songId) => dispatch => {

  return SongApiUtil.fetchSong(songId).then(
    song => dispatch(receiveSong(song)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const createSong = (formData) => dispatch => {

  return SongApiUtil.postSong(formData).then(
    (song) => dispatch(receiveSong(formData)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const deleteSong = (songId) => dispatch => {

  return SongApiUtil.deleteSong(songId).then(
    () => dispatch(removeSong(songId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}