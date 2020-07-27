import React from 'react'
import SongIndex from '../songs/song_index'
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
              <p>by <Link to={`users/${album.artist_id}`}>{album.artist.artistName}</Link></p>
            </div>
            {/* <SongIndex albumId={album.id}/> */}
            <SongIndex 
            fetchSongs={this.props.fetchAlbumSongs}
            playing={this.props.playing}
            albumId={album.id}/>
            <Player/>
            <img src={`${album.photoUrl}`} width="350" height='350' />
          </div>
        </div>
      )
      
    }
  }
}

export default AlbumShow;
