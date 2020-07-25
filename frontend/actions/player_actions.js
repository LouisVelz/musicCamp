export const CURRENTLY_PLAYING = 'CURRENTLY_PLAYING'

const currentlyPlay = (song) => {
  return {
    type: CURRENTLY_PLAYING,
    song,
  };
};

export const currentlyPlaying = (song) => (dispatch) => {

  return (song) => dispatch(currentlyPlay(song))
  
};