import React from 'react'
import AlbumSongList from './album_songs_list'

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
    // .then(this.setState({album: this.props.album}))
    // this.props.fetchAlbumSongs(this.props.match.params.albumId)
  }

  render() {
    const { album } = this.props

    // let allSongs = songs.map(song => {
    //   return <SongIndexItem
    //     key={song.id} song={song}
    //   />
    // })

    if (!album) {
      return <div>fetching data...</div>
    } else {
      return (

        <div className="song-index" >
          {/* <ol>
            {allSongs}
          </ol> */}
          <AlbumSongList album={album} fetchAlbumSongs={this.props.fetchAlbumSongs} />
          <p>{album.title}</p>
          <img src={`${album.photoUrl}`} width="350" height='350' />

        </div>
      )
      
    }
  }
}

export default AlbumShow;
