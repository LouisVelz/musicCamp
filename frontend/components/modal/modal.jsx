import React from 'react';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux';
import SignupFormContainer from '../user_signin/signup_form_container'
import LoginFormContainer from './login_modal'



class Modal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

  const { modal, closeModal } = this.props
  if (!modal) {
    return null;
  }

 
  let component;
      switch (modal) {
        case "login":
          component = <LoginFormContainer />;
          break;
        case "signup":
          component = <SignupFormContainer />;
          break;
        default:
          return null;
      }
      debugger
    return (
      // onClick = { closeModal } put insie className modal-background to close modal
      //on background click
      // onClick = { closeModal }
      <div className="modal-background" > 
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);