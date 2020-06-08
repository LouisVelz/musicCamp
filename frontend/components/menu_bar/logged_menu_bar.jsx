import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class LoggedMenuBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {open: false}
    this.handleClick.bind(this)

  }

  handleClick(){
    // debugger
    // this.setState({open: !this.state.open})
    this.setState({open: !this.state.open})

  }


  render(){
    let heart = <FontAwesomeIcon icon={faHeart} size='lg' />
    let bolt = <FontAwesomeIcon icon={faBolt} size='lg' />
    let search = <FontAwesomeIcon icon={faSearch} size='1x' />

    return(
      <div className='logged-menu-bar'>
        <ul className='logged-menu-bar-left'>
          <li><div className="rhomboid"></div> musiccamp</li>
          <li>
            <input type="text" placeholder='    Search and discover music' />
            <button>{search}</button>
          </li>
        </ul>
        <ul className='logged-menu-bar-right'>
          <li><button>{bolt}</button></li>
          <li><button>{heart}</button></li>
          <li><button onClick={this.handleClick.bind(this)}><div className='circle'></div></button>
          {this.state.open && (<div className="dropdown">
              <ul>
                <li>{this.props.currentUser.username}</li>
                <li>Purchases</li>
                <li>Settings</li>
                <li>Help</li>
                <li><button onClick={() => this.props.logout()}>Log Out</button></li>
              </ul>
            </div>
          )}
          </li>
          {/* <li><button onClick={() => this.props.logout()}>Log Out</button></li> */}
        </ul>
      </div>
    )
  }
}

export default LoggedMenuBar;