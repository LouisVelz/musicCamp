import React from 'react';
import { closeModal } from './../actions/modal_actions'
import { connect } from 'react-redux';
import SignupFormContainer from './user_signin/signup_form_container'



class Modal extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
  const { modal, closeModal } = this.props
    
  if (!modal) {
    return null;
  }
  // let component;
  //     switch (modal) {
  //       case "login":
  //         component = <LoginFormContainer />;
  //         break;
  //       case "signup":
  //         component = <SignupFormContainer />;
  //         break;
  //       default:
  //         return null;
  //     }
    return (
      // onClick = { closeModal } put insie className modal-background to close modal
      //on background click
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <SignupFormContainer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);