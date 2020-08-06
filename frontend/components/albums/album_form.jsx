import React from 'react'
import SongCreator from './../songs/song_form_container'

class AlbumForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        title: "",
        description: "",
        pictureFile: null
      },
    
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileReader = this.fileReader.bind(this)
    this.handleFile = this.handleFile.bind(this)
    // this.handleNewSong = this.handleNewSong.bind(this)
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('album[title]', this.state.title);
    formData.append('album[description]', this.state.description);
    formData.append('album[photo]', this.state.pictureFile);
    this.props.createAlbum(formData)
    // .then(res => {
    //   this.state.songs.push(<SongCreator albumId={res.album.id} />)
    // })
  }

  handleFile(e) {
    this.setState({ pictureFile: e.currentTarget.files[0] })
  }

  fileReader(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => this.setState({ photoUrl: reader.result, pictureFile: file });
    reader.readAsDataURL(file);
  }


  render() {
    
    return (
      <div className="album-form">
        <h4>Upload an Album</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Title:
            <input
              type="text"
              onChange={this.update("title")}
              value={this.state.title}
            />
            <br />
          </label>
          {this.props.errors.length === 0 ? null : (
            <div className="errors">{this.props.errors}</div>
          )}
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
            Picture:
            <input
              type="file"
              onChange={this.handleFile.bind(this)}
              onChange={this.fileReader}
            />
            <br />
          </label>
          <br />
          <button type="submit">Create Album</button>
        </form>
        {/* {this.state.songs.length === 0 ? null : 
        this.state.songs.map(song => {
          return song
        })} */}
      </div>
    );
  }
}


// song: { title: "", track_num: "", description: "", album_id: "", artist_id: "" }
export default AlbumForm;