import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faPauseCircle } from "@fortawesome/free-regular-svg-icons";



class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = { icon: null };
  }

  render(){

    const { song, currentlyPlaying, isPlaying } = this.props
    let icon
    if (!!currentlyPlaying && isPlaying && currentlyPlaying.title === song.title){
        icon = <FontAwesomeIcon icon={faPauseCircle} size="sm" />
    }else{
      icon = <FontAwesomeIcon icon={faPlayCircle} size="sm" />
    }

    return (
      <li>
        <button onClick={() => this.props.playing(song)}>
          {icon}
        </button>{" "}
          {song.track_num}{". "}
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    );
  }
}

export default SongIndexItem;