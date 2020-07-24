import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";



class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { song } = this.props

    return (
      <li>
        <button onClick={this.props.handleClick} data-id={this.props.index}>
          <FontAwesomeIcon icon={faPlayCircle} size="sm" />
        </button>{" "}
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    );
  }
}

export default SongIndexItem;