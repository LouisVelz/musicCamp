
export const togglePlay = (isPlaying, isPaused) => {
  debugger
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