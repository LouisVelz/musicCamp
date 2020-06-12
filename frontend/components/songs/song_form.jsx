import React from 'react'

class SongForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.song
    this.handleSubmit.bind(this)
    // this.fileReader.bind(this)
  }
  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[track_num]', this.state.track_num);
    formData.append('song[description]', this.state.description);
    formData.append('song[album_id]', this.state.album_id);
    formData.append('song[song]', this.state.songFile);

    this.props.createSong(formData)
    this.setState({
      song: {
        title: "",
        track_num: "",
        description: "",
        album_id: "",
        songFile: null
      }
    })
  }

  handleFile(e){

    this.setState({songFile: e.currentTarget.files[0]})
  }

  // fileReader(e){
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () => this.setState({ songUrl: reader.result, songFile: file });
  //   reader.readAsDataURL(file);
  // }

  render(){
    return(
      <div className="song-form">
        <h4>Upload a song</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title:
            <input
              type="text"
              onChange={this.update('title')}
              value={this.state.title} />
            <br />
          </label>
          <br />
          <label>Track Number:
            <input
              type="number"
              onChange={this.update('track_num')}
              value={this.state.track_num} />
            <br />
          </label>
          <br />
          <label>Description:
            <input
              type="text"
              onChange={this.update('description')}
              value={this.state.description} />
            <br />
          </label>
          <br />
          <label>Album id:
            <input
              type="number"
              onChange={this.update('album_id')}
              value={this.state.album_id} />
            <br />
          </label>
          <br />
          <label>Song File:
            <input
              type="file"
              onChange={this.handleFile.bind(this)}
               />
            <br />
          </label>
          <br />

          <button type='submit'>Create Song</button>
        </form>
      </div>
    )
  }
}


// song: { title: "", track_num: "", description: "", album_id: "", artist_id: "" }
export default SongForm;