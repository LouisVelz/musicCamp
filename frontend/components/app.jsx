import React from "react";
import { Route, Switch } from 'react-router-dom';

import MenuBarContainer from './menu_bar/menu_bar_container'
import SignUpFormContainer from './user_signin/signup_form_container'
import LogInFormContainer from './user_signin/login_form_container'

const App = () => (
  <div>
    <h1>Music Camp</h1>
    <MenuBarContainer />
    <Switch>
      <Route path='/signup' component={SignUpFormContainer} />
      <Route path='/login' component={LogInFormContainer} />
    </Switch>
  </div>
);

export default App;