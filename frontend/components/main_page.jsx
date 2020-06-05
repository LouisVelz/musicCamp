import React from 'react'
import Footer from './footer'
import MenuBarContainer from './menu_bar/menu_bar_container'

class MainPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="main">
 
          <div className="first-element"></div>
          <div className="last-element"></div>

      </div>
    )
  }
}

export default MainPage;