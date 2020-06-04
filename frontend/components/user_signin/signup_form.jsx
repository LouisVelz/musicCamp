import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  update(type){
    return e => this.setState({[type]: e.currentTarget.value})
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.signup(this.state)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    let times = <FontAwesomeIcon icon={faTimes} />

    return (
      <div>
        <h4>Sign up for a Musiccamp account <Link to='/root'>{times}</Link></h4>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Email Address
            <input 
              type="text"
              onChange={this.update('email')}
              value={this.state.email}/>
          </label>
          <label>Password
            <input 
              type="password"
              onChange={this.update('password')}
              value={this.state.password}/>
          </label>
          <label>Username
            <input 
              type="text"
              onChange={this.update('username')}
              value={this.state.username}/>
          </label>
          <p><input type="checkbox"/>I have read and agreed to <Link to='terms'>Terms of User</Link>.</p>
          <button type='submit'>Sign up</button>
        </form>

          <h6>Already have an account?<Link to='/login'>Log in</Link>.</h6>
      </div>
    )
  }
}

export default SignUpForm;
