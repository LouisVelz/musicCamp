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

  render(){
    let times = <FontAwesomeIcon icon={faTimes} />
    let passwordError = null
    let userError = null
    let emailError = null
    this.props.errors.forEach(error => {
      if (error[0] === "U"){
        userError = <p className='errors'>{error}</p>
      }else if (error[0] === "P"){
        passwordError = <p className='errors'>{error}</p>
      }else {
        emailError = <p className='errors'>{error}</p> 
      }
    });
    let checkboxError = null
    return (
      <div className='signup-main'>
        <h4>Sign up for a Musiccamp account <button onClick={() => this.props.closeModal()}>{times}</button></h4>

        <form onSubmit={this.handleSubmit} className='signup-form'>
          <label>Email Address
            <br/>
            <input 
              type="text"
              onChange={this.update('email')}
              value={this.state.email}/>
              <br/>
              {emailError}
          </label>
          <br/>
          <label>Password
            <br/>
            <input 
              type="password"
              onChange={this.update('password')}
              value={this.state.password}/>
              <br/>
              {passwordError}
          </label>
          <br/>
          <label>Username
            <br/>
            <input 
              type="text"
              onChange={this.update('username')}
              value={this.state.username}/>
              <br/>
              {userError}
          </label>
          <p><input type="checkbox"/>I have read and agreed to <Link to='terms'>Terms of Use</Link>.</p>
          <button type='submit'>Sign up</button>
        </form>

          <h6>Already have an account? <Link to='/login'>Log in</Link>.</h6>
      </div>
    )
  }
}

export default SignUpForm;
