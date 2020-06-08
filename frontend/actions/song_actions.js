import { fetchSongs, fetchSong, postSong, deleteSong } from './../util/songs_api_util'

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = "RECEIVE_SONG";
export const DELETE_SONG = 'DELETE_SONG';

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

const deleteSong = (songId) => {
  return {
    type: DELETE_SONG,
    songId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}


export const fetchSongs = () => dispatch => {

  return fetchSongs().then(
    songs => dispatch(receiveSongs(songs)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const fetchSong = (songId) => dispatch => {

  return fetchSong(songId).then(
    song => dispatch(receiveSong(song)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const postSong = (song) => dispatch => {

  return deleteSession().then(
    (song) => dispatch(receiveSong(song)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const deleteSong = (songId) => dispatch => {

  return deleteSong(songId).then(
    () => dispatch(deleteSong(songId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}