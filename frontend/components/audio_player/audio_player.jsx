import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle} from '@fortawesome/free-regular-svg-icons'
import { faPauseCircle } from '@fortawesome/free-regular-svg-icons'
import { faFastForward} from '@fortawesome/free-solid-svg-icons'
import { faFastBackward} from '@fortawesome/free-solid-svg-icons'


  class Player extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTime: 0,
        duration: 0,
      };

      // this.togglePlay = this.togglePlay.bind(this);
      this.songDuration = this.songDuration.bind(this);
      this.timeStamp = this.timeStamp.bind(this);
      this.handleToggleBar = this.handleToggleBar.bind(this);
      this.handleCurrentTime = this.handleCurrentTime.bind(this);
      this.handleBackward = this.handleBackward.bind(this);
      this.handleFordward = this.handleFordward.bind(this);
      this.handleNextSong = this.handleNextSong.bind(this)
    }

    // togglePlay() {
    //   let audioPlayer = document.getElementById("audioPlayer");
    //   if (audioPlayer.paused) {
    //     this.props.isPlaying();
    //     audioPlayer.play();
    //   } else {
    //     this.props.isPaused();
    //     audioPlayer.pause();
    //   }
 
    // }

    componentDidMount() {
      this.songDuration();
    }

    componentWillUnmount() {
      clearInterval(this.playerInterval);
      this.props.playing(null)
    }

    componentWillReceiveProps(nextProps){
      const audioPlayer = document.getElementById("audioPlayer");
      if (!!this.props.currentlyPlaying){
        if(nextProps.currentlyPlaying !== this.props.currentlyPlaying){
          setTimeout(() => {
            audioPlayer.play();
            this.props.isPlaying();
          }, 10);
        }
      }
    }

    handleNextSong(){
      if((Math.floor(this.state.currentTime) + 1) === Math.floor(this.state.duration)){
        this.handleFordward()
      }
    }


    songDuration() {
      let audioPlayer = document.getElementById("audioPlayer");
      this.setState({
        duration: audioPlayer.duration,
      });
    }

    timeStamp(time) {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time - minutes * 60);
      if (seconds < 10) {
        seconds = `0 ${seconds}`;
      }
      return `${minutes} : ${seconds}`;
    }

    handleToggleBar(e) {
      let audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.currentTime = e.target.value;
      this.setState({ currentTime: e.target.value });
    }

    handleCurrentTime() {
      const audioPlayer = document.getElementById("audioPlayer");
      const scrollBar = document.getElementById("scrollbar");

      if (!audioPlayer.paused) {
        this.playerInterval = setInterval(() => {
          scrollBar.value = audioPlayer.currentTime;
          this.setState({ currentTime: audioPlayer.currentTime });
          this.handleNextSong()
        }, 1000);
      }
      
    }

    handleBackward() {
      const audioPlayer = document.getElementById("audioPlayer");
      let previousSongIndex;
      this.props.songs.forEach((song, index) => {
        if (this.props.currentlyPlaying.id === song.id) {
          previousSongIndex = index - 1;
        }
      });
      if (previousSongIndex < 0) {
        previousSongIndex = this.props.songs.length - 1;
      }
      this.props.playing(this.props.songs[previousSongIndex]);

      setTimeout(() => {
        audioPlayer.play();
        this.props.isPlaying();
      }, 500);
    }

    handleFordward() {
      const audioPlayer = document.getElementById("audioPlayer");
      let nextSongIndex;
      this.props.songs.forEach((song, index) => {
        if (this.props.currentlyPlaying.id === song.id) {
          nextSongIndex = index + 1;
        }
      });

      this.props.playing(
        this.props.songs[nextSongIndex % this.props.songs.length]
      );
      setTimeout(() => {
        audioPlayer.play();
        this.props.isPlaying()
      }, 500);
    }

    render() {

      const { currentlyPlaying } = this.props;
      let playPause =
        this.props.isPlayingAudio ? (
          <FontAwesomeIcon icon={faPauseCircle} size="3x" />
          ) : (
          <FontAwesomeIcon icon={faPlayCircle} size="3x" />
        );

      let audioPlayer = this.props.currentlyPlaying ? (
        <div className="player">
          <div className="player-button">
            <button onClick={() => this.props.togglePlay()}>{playPause}</button>
          </div>
          <div className='player-side'>

          <div className="player-info">
              <p>
                {currentlyPlaying.title}
              </p>
              <p>
                  {this.timeStamp(this.state.currentTime)} /{" "}
                  {this.timeStamp(this.state.duration)}
              </p>
          </div>
          <br/>
            <div className="scroll-skip">
              <input
                className="scrollbar"
                id="scrollbar"
                type="range"
                min="0"
                defaultValue="0"
                max={`${this.state.duration}`}
                onInput={this.handleToggleBar}
              />
                <button onClick={this.handleBackward}>
                  <FontAwesomeIcon icon={faFastBackward} size="sm" />
                </button>
                <button onClick={this.handleFordward}>
                  <FontAwesomeIcon icon={faFastForward} size="sm" />
                </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      ) : null;

      return (
        <>
          <audio
            id="audioPlayer"
            src={currentlyPlaying ? currentlyPlaying.songUrl : null}
            onPlay={this.handleCurrentTime}
            onLoadedMetadata={this.songDuration}
          ></audio>
          {audioPlayer}
        </>
      );
    }
  }
  
  export default Player;