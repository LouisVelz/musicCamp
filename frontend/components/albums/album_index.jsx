import React from 'react'
import AlbumIndexItem from './album_index_item'


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
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

export default AlbumIndex;