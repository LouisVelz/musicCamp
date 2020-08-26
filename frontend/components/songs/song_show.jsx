import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props
      .fetchSong(this.props.match.params.songId)
      .then((song) => this.props.playing(song.song));
  }
  UNSAFE_componentWillUnmount() {}

  render() {
    const { song, currentlyPlaying, isAudioPlaying } = this.props;
    let playPause;
    if (isAudioPlaying) {
      playPause = (
        <button onClick={() => this.props.togglePlay()}>
          <FontAwesomeIcon icon={faPause} size="3x" />
        </button>
      );
    } else {
      playPause = (
        <button onClick={() => this.props.togglePlay()}>
          <FontAwesomeIcon icon={faPlay} size="3x" />
        </button>
      );
    }

    if (!song) {
      return <div>fetching data...</div>;
    } else {
      return (
        <div className="song-show">
          <div className="song-show-title">
            <h1>
              Inspired by {song.artist.artistName}, {song.title} from the album{" "}
              {song.album.albumName} takes flight
            </h1>
          </div>
          <div className="song-icon-top">{playPause}</div>
          <div className="song-show-image">
            <img src={`${song.photoUrl}`} height="765" />
          </div>
          <div className="main-content">
            <div className="player-and-picture">
              <div className="larger-image">
                <img src={`${song.album.photo}`} alt="" />
              </div>
              <div className="smaller-image">
                <img src={`${song.album.photo}`} alt="" />
              </div>
              <div className="lower-content">
                <div className="play-and-info">
                  <div className="play-info">
                    <div className="icon-bottom">{playPause}</div>
                    <Link to={`/albums/${song.album_id}`}>
                      {song.album.albumName}
                    </Link>
                    <Link to={`/users/${song.artist_id}`}>
                      by {song.artist.artistName}
                    </Link>
                  </div>
                  <div className="goto-and-buy">
                    <p>
                      <FontAwesomeIcon icon={faHeartBroken} size="lg" />
                      {"  "} <a href={song.download}>DOWNLOAD</a>
                    </p>
                    <p>
                      <Link to={`/albums/${song.album_id}`}>GO TO ALBUM</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-picture">
              <p>
                {song.description} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sed, ducimus eaque. Sint neque minima
                molestiae architecto, quis molestias reprehenderit quas
                consectetur numquam possimus illo id alias sit corporis mollitia
                expedita.
              </p>
              <p>
                {song.description} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sed, ducimus eaque. Sint neque minima
                molestiae architecto, quis molestias reprehenderit quas
                consectetur numquam possimus illo id alias sit corporis mollitia
                expedita.
              </p>
              <img src={song.artist.photo} height="435" />
            </div>
          </div>

          <audio id="audioPlayer" src={song.songUrl}></audio>
        </div>
      );
    }
  }
}

export default SongShow;
