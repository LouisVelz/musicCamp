import React from 'react'

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
    this.handleAlbumCall = this.handleAlbumCall.bind(this)
    this.handleSongCreate = this.handleSongCreate.bind(this)
  }

  handleAlbumCall(title) {
    e.preventDefault();
    this.props.fetchAlbum(title).then(res => {
      debugger
      this.state.songs.push(<SongFields albumId={res.id}
          handleSongCreate={this.handleSongCreate}
          songErrors= {this.props.songErrors}/>)
    });
  }

  handleSongCreate (formData){
    this.props.createSong(formData).then(res => {
      this.state.songs.push(
        <SongFields
          albumId={res.album_id}
          handleSongCreate={this.handleSongCreate}
          songErrors={this.props.songErrors}
        />
      );
    })
  }

  // update(type) {
  //   return (e) => this.setState({ [type]: e.currentTarget.value });
  // }


  render() {
    return (
      <div className="song-form">
        <h4>Upload a song</h4>
        <FindAlbum
          handleAlbumCall={this.handleAlbumCall}
          albumErrors={this.props.albumErrors}
        />
        {this.state.songs.length === 0
          ? null
          : this.state.songs.map((song) => song)}
      </div>
    );
  }
}




class FindAlbum extends React.Component{
  constructor(props){
    super(props)
    this.state = { title: '' }
    this.update = this.update.bind(this)

  }

  update() {
    return e => this.setState({ title: e.currentTarget.value })
  }

  render(){

    return(
      <div className="find-album">

        <form onSubmit={this.props.handleAlbumCall} >
          <label >Enter album's title to add song to:
              <input
              type="text"
              onChange = {this.update}
            />
          </label>
          <button type='submit'>Find Album</button>
        </form>
        {this.props.albumErrors.length === 0 ? null : 
        <div className='errors'>
          <p>{this.props.albumErrors[0]}</p>
        </div>}
      </div>
    )
  }
}


class SongFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      track_num: "",
      description: "",
      album_id: "",
      songFile: null,
      photoFile: null,
    };

    this.fileReader = this.fileReader.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[track_num]", this.state.track_num);
    formData.append("song[description]", this.state.description);
    formData.append("song[album_id]", this.state.album_id);
    formData.append("song[song]", this.state.songFile);
    formData.append("song[photo]", this.state.photoFile);

    this.props.handleSongCreate(formData);
  }

  handleFile(e) {
    this.setState({ songFile: e.currentTarget.files[0] });
  }

  fileReader(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ songUrl: reader.result, songFile: file });
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            onChange={this.update("title")}
            value={this.state.title}
          />
          <br />
        </label>
        <br />
        <label>
          Track Number:
          <input
            type="number"
            onChange={this.update("track_num")}
            value={this.state.track_num}
          />
          <br />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            onChange={this.update("description")}
            value={this.state.description}
          />
          <br />
        </label>
        <br />
        <label>
          Album id:
          <input
            type="number"
            onChange={this.update("album_id")}
            value={this.state.album_id}
          />
          <br />
        </label>
        <br />
        <label>
          Song File:
          <input type="file" onChange={this.handleFile} />
          <br />
        </label>
        <br />

        <button type="submit">Create Song</button>
      </form>
    );
  }
}


// song: { title: "", track_num: "", description: "", album_id: "", artist_id: "" }
export default SongForm;