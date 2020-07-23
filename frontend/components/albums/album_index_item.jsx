import React from 'react'
import { Link } from 'react-router-dom'



class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }



  render() {
    const { album } = this.props

    return(
      < li key = { album.id } >
        <Link to={`/albums/${album.id}`}>
          <img src={album.photoUrl} />
        </Link>
        <p>
          FEATURES · <span>{this.randomDate(new Date(2012, 0, 1), new Date()).toDateString()}</span>
        </p>
        <Link to={`/albums/${album.id}`}>{album.description}</Link>
      </li >);
  }
}

export default AlbumIndexItem;