import React from "react";
import { Route, Switch } from 'react-router-dom';
import MainPageContainer from './main_page/main_page_container'
import MenuBarContainer from './menu_bar/menu_bar_container'
import LoggedMenuBarContainer from './menu_bar/logged_menu_bar_container'
// import SignUpFormContainer from './user_signin/signup_form_container'
import Modal from './modal'
import LogInFormContainer from './user_signin/login_form_container'
import {AuthRoute, ProtectedRoute } from './../util/route_util'
import Footer from './footer'
import SongFormContainer from './songs/song_form_container'
import SongIndexContainer from './songs/song_index_container'
import SongShowContainer from './songs/song_show_container'



const App = () => (
  <div>
    <Modal/>

    <Switch>
      <AuthRoute exact path='/' component={MenuBarContainer}/>
      <ProtectedRoute path='/home' component={LoggedMenuBarContainer}/>
    </Switch>

    <Switch>
      <AuthRoute path='/login' component={LogInFormContainer} />
      <Route path='/home/songs/index' component={SongIndexContainer} />
      <ProtectedRoute exact path='/songs/new' component={SongFormContainer} />
      <Route exact path='/songs/:songId' component={SongShowContainer} />
      <Route path='/' component={MainPageContainer}/>
    </Switch>

    <Footer/>
  </div>
);

export default App;