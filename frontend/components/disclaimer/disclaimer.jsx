import  React  from 'react'

class Disclaimer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="disclaimer">
        <h1>Disclaimer</h1>
        <p> The content of this page is intended for educational purposes only. 
          This is an open source page which only purpose is to showcase code.
          None of the music files on this page belong to the artist on the same page. 
          The music files and the pictures were obtained from domain free pages and do not 
          represent the work or the artistic abilities of either the person in the picture or the artist's name used 
          to display such files. 

          Thanks for showing interest on this page.
           
        </p>
      </div>
    )
  }
}

export default Disclaimer