import React from 'react'
import AlbumSongList from './album_songs_list'
import SongIndex from '../songs/song_index'

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
  }

  handleClick() {
    e.preventDefault()
    this.setState({ selectedTrack: e.currentTarget.value })

  }

  render() {
    const { album } = this.props
    debugger
    if (!album) {
      return <div>fetching data...</div>
    } else {
      return (

        <div className="album-show" >
          <SongIndex fetchSongs={this.props.fetchAlbumSongs} albumId={album.id}/>
          <p>{album.title}</p>
          <img src={`${album.photoUrl}`} width="350" height='350' />

        </div>
      )
      
    }
  }
}

export default AlbumShow;
