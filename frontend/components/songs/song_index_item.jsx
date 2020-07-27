import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";



class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { song, index } = this.props

    return (
      <li>
        <button onClick={() => this.props.currentlyPlaying(song)} data-id={index}>
          <FontAwesomeIcon icon={faPlayCircle} size="sm" />
        </button>{" "}
          {song.track_num}{". "}
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    );
  }
}

export default SongIndexItem;