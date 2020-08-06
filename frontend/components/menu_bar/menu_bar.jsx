import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import Search from './search'


class MenuBar extends React.Component{
  constructor(props){
    super(props)
    this.container = React.createRef();
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this)

  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', () => {
      this.setState({open: false})
    });
  }


  handleClickOutside(e) {

    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  }




  render(){
    let heart = <FontAwesomeIcon icon={faBell} size='lg' />

    let pageContent
    if (this.props.currentUser){
      pageContent = <div className='logged-menu-bar'>
        <ul className='logged-menu-bar-left'>
          <li><div className="rhomboid"></div><Link to='/'><strong>musiccamp</strong></Link></li>
          <li>
            <Search />
          </li>
        </ul>
        <ul className='logged-menu-bar-right'>
  
          <li><button>{heart}</button></li>
          <li ref={this.container}><button onClick={this.handleClick}><div className='circle'></div></button>
            {this.state.open && (<div className="dropdown">
              <ul>
                <li><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link></li>
                <li><Link to ={`/songs/new`}>Edit profile</Link></li>
                <li><Link to ={`/songs/new`}>Upload songs</Link></li>
                <li><Link to ={`/albums/new`}>Upload albums</Link></li>

                <li><button onClick={() => this.props.logout()}>Log Out</button></li>
              </ul>
            </div>
            )}
          </li>
        </ul>

        
      </div>
    }else {
      pageContent = <div className='menu-bar'>
        <ul className='menu-bar-top'>
          <li><div className='rhomboid'></div><Link to='/'><strong>musiccamp</strong></Link></li>

          <li>
            <Search />
          </li>
        </ul>

        <ul className="menu-bar-bottom">
          <li>Discover amazing new music and <span>directly support</span> the artists who make it.</li>
          <li>
            <button onClick={() => this.props.openModal('signup')}>sign up</button>
            <Link to='/login'><button>log in</button></Link>
          </li>
        </ul>
      </div>
    }

    return pageContent
  }
}
export default MenuBar;
