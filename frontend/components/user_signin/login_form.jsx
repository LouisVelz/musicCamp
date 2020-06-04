import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './../footer'

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


  render() {


    return (
      <div className='login-main'>
        <div className='login-header'>
          <div className="rhomboid"></div><Link to='root'>musiccamp</Link>
        </div>
        <div className='login-form'>
          <h4>Log in</h4>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className='inside-form'>
            <label>Username / email
              <input
                type="text"
                onChange={this.update('email')}
                value={this.state.email} />
            </label>
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
        </div>
        <Footer/>
      </div>
    )
  }
}

export default LogInForm;