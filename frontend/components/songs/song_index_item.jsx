import React from 'react'
import { Link } from 'react-router-dom'
import AudioPlayer from './../audio_player/audio_player'



class SongIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { song } = this.props

    // let audioFiles=[{
    //   src: song.songUrl,
    //   title: song.title,
    //   artist: song.artist
    // }]

    return(
      <li>
          <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    )
  }
}

export default SongIndexItem;