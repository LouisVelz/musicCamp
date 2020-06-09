import React from 'react'

import MenuBarContainer from '../menu_bar/menu_bar_container'

class MainPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    let menuBars 
    if (this.props.currentUser) {
      menuBars = <div className="logged-in"></div>
    } else {
      menuBars = <div className="not-logged-in"></div>
    }
    return(
      <div className="main">
          {menuBars}
          <div className="first-element">
            <h1>
            <img src={window.musicianURL }/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deserunt nisi numquam impedit, doloremque recusandae ipsum illum, quis ab sequi cumque, aliquam soluta itaque eligendi fugiat doloribus provident ipsam possimus.
            </h1> 
          </div>
          <div className="last-element"></div>

      </div>
    )
  }
}

export default MainPage;

// window.monkeyURL
// window.musicianURL 
// window.cartoonURL
// window.girl2URL
// window.bandURL 
// window.microphoneURL 
// window.guitarURL 
// window.guitar2URL 