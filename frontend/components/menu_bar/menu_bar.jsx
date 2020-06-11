import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'



class MenuBar extends React.Component{
  constructor(props){
    super(props)
    // this.container = React.createRef();
    this.state = { open: false }
    this.handleClick.bind(this)
    // this.handleClickOutside.bind(this)
    // debugger
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }
  // handleClickOutside(event) {

  //   if (this.container.current && !this.container.current.contains(event.target)) {
  //     this.setState({
  //       open: false,
  //     });
  //   }
  // };

  // componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClickOutside);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClickOutside);
  // }


  render(){

    let search = <FontAwesomeIcon icon={faSearch} size='1x'/>
    let heart = <FontAwesomeIcon icon={faHeart} size='lg' />
    let bolt = <FontAwesomeIcon icon={faBolt} size='lg' />

    let pageContent
    if (this.props.currentUser){
      pageContent = <div className='logged-menu-bar'>
        <ul className='logged-menu-bar-left'>
          <li><div className="rhomboid"></div><Link to='/'><strong>musiccamp</strong></Link></li>
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
                <li><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link></li>
                <li><Link to ={`/songs/new`}>Upload a song</Link></li>
                <li><Link to ={`/songs/index`}>Albums</Link></li>
                <li>Help</li>
                <li><button onClick={() => this.props.logout()}>Log Out</button></li>
              </ul>
            </div>
            )}
          </li>
        </ul>
        {/* <div className="container" ref={this.container}></div> */}
      </div>
    }else {
      pageContent = <div className='menu-bar'>
        <ul className='menu-bar-top'>
          <li><div className='rhomboid'></div>musiccamp</li>

          <li>
            <input type="text" placeholder='    Search and discover music' />
            <button>{search}</button>
          </li>
        </ul>

        <ul className="menu-bar-bottom">
          <li>Discover amazing new music and <Link to='/'>directly support</Link> the artists who make it.</li>
          <li>
            <button onClick={() => this.props.openModal()}>sign up</button>
            <Link to='/login'><button>log in</button></Link>
          </li>
        </ul>
      </div>
    }

    return pageContent
  }
}

export default MenuBar;
