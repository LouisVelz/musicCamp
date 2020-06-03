import React from "react";
import { Route, Switch } from 'react-router-dom';

import MenuBarContainer from './menu_bar/menu_bar_container'
import SignUpFormContainer from './user_signin/signup_form_container'
import LogInFormContainer from './user_signin/login_form_container'
import {AuthRoute, ProtectedRoute } from './../util/route_util'

const App = () => (
  <div>

    <MenuBarContainer />
    <AuthRoute path='/signup' component={SignUpFormContainer} />
    <AuthRoute path='/login' component={LogInFormContainer} />
  </div>
);

export default App;