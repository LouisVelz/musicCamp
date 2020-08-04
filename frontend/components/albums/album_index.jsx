import React from 'react'
import AlbumIndexItem from './album_index_item'


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchAlbums(this.props.userId)
  }

  render() {

    if (this.props.albums.length === 0){
      return (
        <div className="artist-albums">
          <div className="no-albums">
            <h2>You don't have any music yet, upload something!!</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className="artist-albums">
          <ul>
            {this.props.albums.map(album => {
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