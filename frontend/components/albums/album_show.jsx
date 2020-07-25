import React from 'react'
import SongIndex from '../songs/song_index'
import {Link} from 'react-router-dom'
import Player from '../audio_player/audio_player'

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
  }

  render() {
    const { album} = this.props

    if (!album) {
      return <div>fetching data...</div>
    } else {
      return (

        <div className="album-show" >
          <div className='album-top-bar'><p>music</p><p>community</p></div>
          <div className="main-content">
            <div className="album-title">
              <h1>{album.title}</h1>
              <p>by <Link>{album.artist.artistName}</Link></p>
            </div>
            <Player/>
            <SongIndex fetchSongs={this.props.fetchAlbumSongs} albumId={album.id}/>
            <img src={`${album.photoUrl}`} width="350" height='350' />
          </div>
        </div>
      )
      
    }
  }
}

export default AlbumShow;
