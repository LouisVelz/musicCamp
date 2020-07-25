import React from 'react'
import AlbumIndexItem from './album_index_item'


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {albums: []}
  }
  componentDidMount() {
    this.props.fetchAlbums(this.props.userId)
    .then(albums => {
      this.setState({albums: albums.albums})
    })
  }

  render() {

    if(this.state.albums.length === 0){
      return <div>Fetching data...</div>
    } else {
      return (
        <div className="artist-albums">
          <ul>
            {this.state.albums.map(album => {
              return <AlbumIndexItem
                      key={album.id} album={album}
                     />
            })}
          </ul>
        </div>
      )
    }
  }
}

export default AlbumIndex;