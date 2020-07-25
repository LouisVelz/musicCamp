import AudioPlayer from "react-modular-audio-player";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle} from '@fortawesome/free-regular-svg-icons'
import { faPauseCircle } from '@fortawesome/free-regular-svg-icons'
import { faForward} from '@fortawesome/free-solid-svg-icons'
import { faBackward} from '@fortawesome/free-solid-svg-icons'


  class Player extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        playStatus: 'play',
         currentTime: 0,
         duration: 0
        }

      this.togglePlay = this.togglePlay.bind(this)
      this.songDuration = this.songDuration.bind(this)
      this.timeStamp = this.timeStamp.bind(this)
      this.handleToggleBar = this.handleToggleBar.bind(this)
      this.handleCurrentTime = this.handleCurrentTime.bind(this)
      
    }

  togglePlay() {
    // debugger
    // e.preventDefault()
    let status = this.state.playStatus;
    let audioPlayer = document.getElementById('audioPlayer');
    if (status === 'play') {
      clearInterval(this.playerInterval)
      status = 'pause';
      audioPlayer.play();
    } else {
      status = 'play';
      audioPlayer.pause();
    }
    this.setState({ playStatus: status });
  }

  componentDidMount(){
    this.songDuration()
  }

  componentWillUnmount(){
    clearInterval(this.playerInterval)
  }

  componentDidUpdate(prevProps){
    if(this.props.song.id !== prevProps.song.id){
          this.setState({ playStatus: "pause" });
          let audioPlayer = document.getElementById('audioPlayer')
          audioPlayer.play()
    }
  }

  songDuration (){
    let audioPlayer = document.getElementById('audioPlayer')
    this.setState({
      duration: audioPlayer.duration
    })
  }

  timeStamp(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    if (seconds < 10) {
      seconds = `0 ${seconds}`;
    }
     
    return `${minutes} : ${seconds}`
  }

  handleToggleBar(e){
    let audioPlayer = document.getElementById("audioPlayer");

    audioPlayer.currentTime = e.target.value;
    this.setState({ currentTime: e.target.value });
  }

  handleCurrentTime(){
    const audioPlayer = document.getElementById("audioPlayer");
    const scrollBar = document.getElementById("scrollbar")

    if (!audioPlayer.paused) {
      this.playerInterval = setInterval(() => {
        scrollBar.value = audioPlayer.currentTime;

        this.setState({ currentTime: audioPlayer.currentTime  })
      }, 1000);
    }
  }


    render(){
      if(!this.props.song){
        return <div>fetching data...</div>
      }else {
        let playPause = this.state.playStatus === 'play' ?
          <FontAwesomeIcon icon={faPlayCircle} size='3x' /> : <FontAwesomeIcon icon={faPauseCircle} size='3x' />
  
        let audioPlayer = (
          <div className="player">
            <div className="player-button">
              <button onClick={this.togglePlay}>{playPause}</button>
            </div>
            <div className="player-info">
              <div className="player-song-title">
                <p>{this.props.song.title}</p>
              </div>
              <div className="song-timestamp">
                  {this.timeStamp(this.state.currentTime)} /{" "}
                  {this.timeStamp(this.state.duration)}
              </div>
              <input
                className="scrollbar"
                id="scrollbar"
                type="range"
                min="0"
                defaultValue="0"
                max={`${this.state.duration}`}
                onInput={this.handleToggleBar}
              />
            </div>
          </div>
        );
  
   
          return(
            <>
              <audio
               id='audioPlayer'
               src={this.props.song ? this.props.song.songUrl : null}
               onPlay={this.handleCurrentTime}
               onLoadedMetadata={this.songDuration}
               >
              </audio> 
              {audioPlayer}
            </>
          )
      }
    }
    
  }
  
  export default Player;