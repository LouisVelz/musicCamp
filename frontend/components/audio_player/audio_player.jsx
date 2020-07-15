import AudioPlayer from "react-modular-audio-player";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { faForward} from '@fortawesome/free-solid-svg-icons'
import { faBackward} from '@fortawesome/free-solid-svg-icons'

//inside Component render()
{/* <AudioPlayer
  audioFiles={audioFiles} /> */}

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
    let audioPlayer = document.getElementById('audioPlayer')
    this.songDuration()
    // if (this.props.song){
    //   // audioPlayer.play()
    // }
  }

  componentWillUnmount(){
    clearInterval(this.playerInterval)
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
      let playPause = this.state.playStatus === 'play' ?
        <FontAwesomeIcon icon={faPlayCircle} size='3x' /> : <FontAwesomeIcon icon={faPauseCircle} size='3x' />

      let audioPlayer = 
        <div className='player'>
          <button onClick={this.togglePlay}>{playPause}</button>
          <div className="song-timestamp">
            <p className="current-time">
              {this.timeStamp(this.state.currentTime)}
            </p>

            <input className="scrollbar"
              id="scrollbar"
              type="range"
              min="0"
              defaultValue="0"
              max={`${this.state.duration}`}
              onInput={this.handleToggleBar} />

            <p className="song-duration">
              {this.timeStamp(this.state.duration)}
            </p>
          </div>
        </div>

      // debugger
        return(
          <>
            <audio
             id='audioPlayer'
             src={this.props.song.songUrl}
             onPlay={this.handleCurrentTime}
             
             onLoadedMetadata={this.songDuration}
             >
            </audio> 
            {/* <div className="background" style={{ 'backgroundImage': 'url(' + window.avocado + ')'}}></div>
              <div className="Header"><div className="Title">Now playing</div></div>
            <div className="artwork" style={{ 'backgroundImage': 'url(' + window.avocado + ')' }}></div> */}
              {/* <TrackInformation song={this.props.song} /> */}
              {/* <Controls isPlaying={this.state.playStatus} togglePlay = {this.togglePlay.bind(this)}/> */}
              {/* <Timestamps duration={this.props.song.duration} currentTime={this.state.currentTime} /> */}
            {audioPlayer}
          </>
        )
      }
    
  }
  
  // class TrackInformation extends React.Component{
  //   constructor(props){
  //     super(props)
  //   }

  //   render () {
  //     return (
  //       <div className="track-information">
  //         <div className="track-name">{this.props.song.title}</div>
  //         <div className="track-artist">{this.props.song.artist}</div>
  //         <div className="track-album">{this.props.song.album} </div>
  //         <div className="track-description">{this.props.song.description}</div>
  //         <div className="track-num">{this.props.song.track_num}</div>
  //       </div>
  //     )
  // ``}

  // }

  // class Controls extends React.Component{

  //   constructor(props){
  //     super(props)
  //   }

  //   render(){
  //     let controls
  //     debugger
  //     if (this.props.isPlaying === 'play'){
  //       controls = <div>
  //         {/* <FontAwesomeIcon icon={faBackward} size='lg' />
  //         <FontAwesomeIcon icon={faForward} size='lg' /> */}
  //         <button onClick={this.props.togglePlay()}><FontAwesomeIcon icon={faPlayCircle} size='3x' /></button>
  //         </div>
  //     } else {
  //       controls = <div>
  //         <FontAwesomeIcon icon={faBackward} size='lg' />
  //         <FontAwesomeIcon icon={faForward} size='lg' />
  //         <FontAwesomeIcon icon={faPauseCircle} size='3x' />
  //         </div>
  //     }
  //     debugger
  //     return controls
  //   }
  // }



// var Controls = React.createClass({
//   render: function () {
//     return (
//       <div className="Controls">
//         <div className="Button">
//           <i className="fa fa-fw fa-play"></i>
//         </div>
//       </div>
//     )
//   }
// });

// var Timestamps = React.createClass({
//   convertTime: function (timestamp) {
//     let minutes = Math.floor(timestamp / 60);
//     let seconds = timestamp - (minutes * 60);
//     if (seconds < 10) {
//       seconds = '0' + seconds;
//     }
//     timestamp = minutes + ':' + seconds;
//     return timestamp;
//   },
//   render: function () {
//     return (
//       <div className="Timestamps">
//         <div className="Time Time--current">{this.convertTime(this.props.currentTime)}</div>
//         <div className="Time Time--total">{this.convertTime(this.props.duration)}</div>
//       </div>
//     )
//   }
// });


// Render the UI
// ReactDOM.render(
//   <Player />,
//   document.querySelector('body')
// );
  export default Player;