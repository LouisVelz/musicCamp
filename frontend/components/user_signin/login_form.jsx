import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
  }



  render() {
    let errors = null
    if (this.props.errors.length > 0){
      errors = this.props.errors[0]
    }
  
    return (
      <div className='login-main'>
        <div className='login-header'>
          <div className="rhomboid"></div><Link to='/'>musiccamp</Link>
        </div>
        <div className='login-form'>
          <h4>Log in</h4>

          <form onSubmit={this.handleSubmit} className='inside-form'>
            <label>Username / email
              <input
                type="text"
                onChange={this.update('email')}
                value={this.state.email} />
            </label>
            <p className='errors'>{errors}</p>
            <br/>
            <label>Password
              <input
                type="password"
                onChange={this.update('password')}
                value={this.state.password} />
            </label>
            <br/>
            <button type='submit'>Log in</button>
          </form>
          <h6><Link to='/root'>Forgot your password?</Link></h6>
          <br/>
          <h6>Don't have an account? <Link to='/signup'>Sign up</Link>.</h6>
          <button onClick={() => this.props.login(this.props.demoUser)}>DEMO USER</button>
        </div>
      </div>
    )
  }
}

export default LogInForm;