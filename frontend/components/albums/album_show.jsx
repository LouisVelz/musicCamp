import React from 'react'
import SongIndex from '../songs/song_index_container'
import {Link} from 'react-router-dom'
import Player from '../audio_player/audio_player_container'

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)

  }

  render() {
    const { album } = this.props

    if (!album) {
      return <div>fetching data...</div>
    } else {
      return (
      <div className='album-show'>
        <div className='album-top-bar'>
            <p>music</p><p>community</p>
        </div>

        <div className="album-content" >
          <div className="main-content">
            <div className="album-title">
              <h1>{album.title}</h1>
              <p>by <Link to={`users/${album.artist_id}`}>{album.artist.artistName}</Link></p>
            </div>
            <Player/>
            <p>Digital Album</p>
            <p>Streaming + Download</p>
            <p>Includes unlimited streaming via the free Bandcamp app,
              plus high-quality download in MP3, FLAC and more.</p>

            <SongIndex 
              albumId={album.id}
            />

            <p>{album.decription} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A maiores magnam at fugit ut harum non consectetur eius? Soluta voluptate at, 
            corrupti recusandae fugit incidunt nesciunt. Repellendus velit reiciendis rerum!</p>
          </div>
          <div className="album-picture">
            <img src={`${album.photoUrl}`} width="350" height='350' />
            <p>Supported by</p>
          </div>

          <div className="album-artist">
            <img src={`${album.artist.photo}`} width='125' height='75'/>
            <p>{album.artist.artistName}</p>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default AlbumShow;
