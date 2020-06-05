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
 
          <div className="first-element">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deserunt nisi numquam impedit, doloremque recusandae ipsum illum, quis ab sequi cumque, aliquam soluta itaque eligendi fugiat doloribus provident ipsam possimus.
            </h1> 
          </div>
          <div className="last-element"></div>

      </div>
    )
  }
}

export default MainPage;