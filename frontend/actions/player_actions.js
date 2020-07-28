export const CURRENTLY_PLAYING = 'CURRENTLY_PLAYING'
export const IS_PLAYING = 'IS_PLAYING'
export const IS_PAUSED = 'IS_PAUSED'

export const currentlyPlaying = (song) => {

  return {
    type: CURRENTLY_PLAYING,
    song,
  };
};

export const isPlaying = () => {
  return {
    type: IS_PLAYING
  }
}
export const isPaused = () => {
  return {
    type: IS_PAUSED
  }
}

