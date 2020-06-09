import React from 'react'

class SongForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.song
  }


}


// song: { title: "", track_num: "", description: "", album_id: "", artist_id: "" }
export default SongForm;