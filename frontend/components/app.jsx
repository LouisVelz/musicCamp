import React from "react";
import { Route, Switch } from 'react-router-dom';
import MainPage from './main_page'
import MenuBarContainer from './menu_bar/menu_bar_container'
import LoggedMenuBarContainer from './menu_bar/logged_menu_bar_container'
// import SignUpFormContainer from './user_signin/signup_form_container'
import Modal from './modal'
import LogInFormContainer from './user_signin/login_form_container'
import {AuthRoute, ProtectedRoute } from './../util/route_util'
import Footer from './footer'

const App = () => (
  <div>
    <Modal/>
    <ProtectedRoute path='/' component={LoggedMenuBarContainer}/>
    <Switch>
      <AuthRoute path='/login' component={LogInFormContainer} />
      <AuthRoute path='/' component={MenuBarContainer}/>
    </Switch>

    <MainPage/>
    <Footer/>
  </div>
);

export default App;