export const CURRENTLY_PLAYING = 'CURRENTLY_PLAYING'

export const currentlyPlaying = (song) => {

  return {
    type: CURRENTLY_PLAYING,
    song,
  };
};

export const isPlaying = () => {

}

