import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faPauseCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { togglePlay } from './../../util/player_util'




class SongShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSong(this.props.match.params.songId)
    .then(song => this.props.playing(song))
  }

  render(){
    const { song, currentlyPlaying, isAudioPlaying } = this.props
    let icon
    if (isAudioPlaying) {
      icon = <FontAwesomeIcon icon={faPauseCircle} size="3x" />
    } else {
      icon = <FontAwesomeIcon icon={faPlayCircle} size="3x" />
    }

    if(!this.props.song){
      return <div>fetching data...</div>
    }else{
      return(
        <div className='show-song'>
          <div className='show-song-title'>
            <h1>
              Inspired by {song.artist.artistName}, 
              {song.title} from the album {song.album.albumName} takes flight
             </h1>
          </div>
          <div className='song-icon-top'>
            <button onClick={() => togglePlay(this.props.isPlaying, this.props.isPaused)}>
              {icon}
            </button>
          </div>
          <div className="song-show-image">
            <img src={`${song.photoUrl}`} alt=""/>
          </div>
          <div className="main-content">
            <div className="player-and-picture">
              <img src={`${song.album.photo}`} alt=""/>
              <div className="lower-content">
                <div className="play-and-info">
                  {icon} 
                  <Link to={`album/${song.album_id}`}>{song.album.albumName}</Link>
                  <Link to={`user/${song.artist_id}`}>by {song.artist.artistName}</Link>
                </div>
                <div className="goto-and-buy">
                  <p>BUY</p>
                  <p><FontAwesomeIcon icon={faHeartBroken} size="lg" />WHISHLIST</p>
                  <p><Link to={`album/${song.album_id}`}>GO TO ALBUM</Link></p>
                </div>
              </div>
            </div>
            <p>
            {song.description} Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Sed, ducimus eaque. Sint neque minima molestiae architecto,
             quis molestias reprehenderit quas consectetur numquam possimus
             illo id alias sit corporis mollitia expedita.
            </p>
            <img src={song.artist.photo} alt=""/>
          </div>

          <audio
            id="audioPlayer"
            src={song.songUrl}
          ></audio>
        </div>
      )
    }
  }
}

export default SongShow;
