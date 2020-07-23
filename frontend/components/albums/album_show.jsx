import React from 'react'
import AlbumSongList from './album_songs_list'
import SongIndex from '../songs/song_index'

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
    this.props.fetchAlbumSongs(this.props.match.params.albumId)
  }

  handleClick() {
    e.preventDefault()
    this.setState({ selectedTrack: e.currentTarget.value })

  }

  render() {
    const { album, songs } = this.props

    if (!album) {
      return <div>fetching data...</div>
    } else {
      return (

        <div className="song-index" >
          <SongIndex songs={songs} />
          <AlbumSongList album={album} fetchAlbumSongs={this.props.fetchAlbumSongs} />
          <p>{album.title}</p>
          <img src={`${album.photoUrl}`} width="350" height='350' />

        </div>
      )
      
    }
  }
}

export default AlbumShow;
