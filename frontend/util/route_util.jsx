import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  // debugger
  return{

  loggedin: Boolean(state.session.currentUser)

  } 

}

const Auth = ({ loggedin, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedin ? <Redirect to="/root" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedin, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedin ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))