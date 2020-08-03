
export const togglePlay = (isPlaying, isPaused) => {
  let audioPlayer = document.getElementById("audioPlayer");
  
  if (audioPlayer !== null ) {
    if(audioPlayer.paused) {
      isPlaying();
      audioPlayer.play();
    } else {
      isPaused();
      audioPlayer.pause();
    }
  }
}