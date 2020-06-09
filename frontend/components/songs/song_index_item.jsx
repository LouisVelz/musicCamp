import React from 'react'
import { Link } from 'react-router-dom'


class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { song } = this.props
    return(
      <li>
        <audio controls>
          <source src={`${song.songUrl}`} type="audio.mpeg"/>
        </audio>
        <br/>
        <Link to={`songs/${song.id}`}>{song.title}</Link>
      </li>
    )
  }
}

export default SongIndexItem;