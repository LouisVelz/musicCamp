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

        <audio src={`${song.songUrl}`} controls height="200" width="300"/>
          {/* <source src={`${song.songUrl}`} type="audio.mpeg"/> */}
        <br/>
        <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    )
  }
}

export default SongIndexItem;