import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'



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
    // document.removeEventListener('mousedown', () => {
    //   this.setState({open: false})
    // });
  }


  handleClickOutside(e) {

    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  }




  render(){

    let search = <FontAwesomeIcon icon={faSearch} size='1x'/>
    let heart = <FontAwesomeIcon icon={faBell} size='lg' />
    let bolt = <FontAwesomeIcon icon={faBolt} size='lg' />

    let pageContent
    if (this.props.currentUser){
      pageContent = <div className='logged-menu-bar'>
        <ul className='logged-menu-bar-left'>
          <li><div className="rhomboid"></div><Link to='/'><strong>musiccamp</strong></Link></li>
          <li>
            <input type="text" placeholder='    Search and discover music' />
            <button>{search}</button>
        {/* <div ref={this.setWrapperRef}>{this.props.children}</div> */}
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
                <li><Link to ={`/album/index`}>subscription</Link></li>
                <li><Link to ={`/album/index`}>settings</Link></li>
                <li><Link to ={`/album/index`}>help</Link></li>

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
            <input type="text" placeholder='    Search and discover music' />
            <button>{search}</button>
          </li>
        </ul>

        <ul className="menu-bar-bottom">
          <li>Discover amazing new music and <Link to='/'>directly support</Link> the artists who make it.</li>
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
    // OutsideAlerter.propTypes = {
    //   children: PropTypes.element.isRequired,
    // };

export default MenuBar;
