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


    return (
      <div className='login-form'>
        <Link to='root'>musiccamp</Link>
        <h4>Log in</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Username / email
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email} />
          </label>
          <label>Password
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password} />
          </label>

          <button type='submit'>Log in</button>
        </form>
          <h6><Link to='/root'>Forgot your password?</Link></h6>
          <br/>
          <h6>Don't have an account?<Link to='/signup'>Sign up</Link>.</h6>

      </div>
    )
  }
}

export default LogInForm;