import React from 'react'
import { Link } from 'react-router-dom'



class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { album } = this.props

    // let audioFiles=[{
    //   src: song.songUrl,
    //   title: song.title,
    //   artist: song.artist
    // }]

    return (
      <li>
        {/* <AudioPlayer audioFiles={audioFiles} /> */}
        <img src={`${album.photoUrl}`} alt=""/>
        <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </li>
    )
  }
}

export default SongIndexItem;