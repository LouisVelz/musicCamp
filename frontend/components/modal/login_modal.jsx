import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './../../actions/session_actions'
import { closeModal, openModal } from "./../../actions/modal_actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



class LogInModal extends React.Component {
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
    // debugger
    // if (this.props.modal){
    //   this.props.closeModal()
    // }
    let times = <FontAwesomeIcon icon={faTimes} />
    let errors = null
    if (this.props.errors.length > 0) {
      errors = this.props.errors[0]
    }

    return (
      <div className='signup-main'>

        <h4>Log in<button onClick={() => this.props.closeModal()}>{times}</button></h4>

          <form onSubmit={this.handleSubmit} className="signup-form">
            <label>
              <input
                type="text"
                onChange={this.update("email")}
                value={this.state.email}
                placeholder='Username / Email'
              />
            </label>
            <p className="errors">{errors}</p>
            <br />
            <label>
              <input
                type="password"
                onChange={this.update("password")}
                value={this.state.password}
                placeholder='Password'
              />
            </label>
            <br />
            <button type="submit">Log in</button>
          </form>
          <h6>
            <p><Link to="/root">Forgot your password?</Link></p>
          </h6>
          <br />
          
          <h6>
          Don't have an account? <button onClick={() => this.props.openModal('signup')}>sign up</button>.
          </h6>
      </div>
    );
  }
}

const mSTP = (state) => {

  return {
    errors: state.errors.session,
    user: { email: "", password: "" },
    modal: state.modal,
  };
};

const mDTP = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LogInModal)