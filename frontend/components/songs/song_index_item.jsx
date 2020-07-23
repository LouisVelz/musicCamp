import React from 'react'
import { Link } from 'react-router-dom'
import AudioPlayer from './../audio_player/audio_player'



class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick(){
    e.preventDefault()
    this.setState({selectedTrack: e.currentTarget.value})
  }

  render(){
    const { song } = this.props

    return(
      <li>
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    )
  }
}

export default SongIndexItem;