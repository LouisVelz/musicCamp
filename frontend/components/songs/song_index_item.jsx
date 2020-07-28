import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faPauseCircle } from "@fortawesome/free-regular-svg-icons";



class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = { icon: <FontAwesomeIcon icon={faPlayCircle} size="sm" /> };
  }
  componentDidMount(){
    const audioPlayer = document.getElementById("audioPlayer");
    if (this.props.currentlyPlaying.title === this.props.song.title && !audioPlayer.paused) {
      this.setState({icon: <FontAwesomeIcon icon={faPlayCircle} size="sm" />})
    } else {
      this.setState({icon: <FontAwesomeIcon icon={faPauseCircle} size="sm" />})
    }
  }

  render(){

    const { song, index } = this.props

    return (
      <li>
        <button onClick={() => this.props.playing(song)} data-id={index}>
          {this.state.icon}
        </button>{" "}
          {song.track_num}{". "}
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    );
  }
}

export default SongIndexItem;