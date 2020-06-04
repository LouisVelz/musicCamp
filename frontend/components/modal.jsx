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
    return (
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