import React from 'react'
import { Link } from 'react-router-dom'

class UserPage extends React.Component{
  constructor(props){
    super(props)
    this.randomDate.bind(this)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchAlbums(this.props.match.params.userId)
  }

randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


  render(){
    const {artist, albums} = this.props
    let albumsList
    if(!artist || albums.length === 0) return <div>Fetching data...</div>
    else {
      albumsList = albums.map( album => {
        return (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <img src={album.photoUrl} />
            </Link>
            <p>
              FEATURES · <span>{this.randomDate(new Date(2012, 0, 1), new Date()).toDateString()}</span>
            </p>
            <Link to={`/albums/${album.id}`}>{album.description}</Link>
          </li>);
      });
    }
    return(
      <div className="artist-page">
        <h1>{artist.username}</h1>
        <div className="artist-albums">
          <ul>
            {albumsList}
          </ul>
        </div>

      </div>
    )
  }
}

export default UserPage;