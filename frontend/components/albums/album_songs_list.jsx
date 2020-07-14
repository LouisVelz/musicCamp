import React from 'react'
import SongIndexItem from './../songs/song_index_item'


class AlbumShowList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { songs: []}
  }

  componentDidMount() {

    // this.props.fetchAlbum(this.props.match.params.albumId).then(this.setState({ album: this.props.album }))
    this.props.fetchAlbumSongs(this.props.album.id).then(songs => this.setState(songs))
  }


  render (){
    debugger
    if(!this.state.songs) return <div>Fetching data...</div>
    else {

        let songList = this.state.songs.map(song => {
          return <li key={song.id}>
            <p>{song.title}</p>
            <p>{song.description}</p>
          </li>
        })

        return (
          <div>
            <ol>
              {songList}
            </ol>
          </div>
        )
      }

    }
}




export default AlbumShowList