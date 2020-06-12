import React from "react";
import { Route, Switch } from 'react-router-dom';
import MainPageContainer from './main_page/main_page_container'
import MenuBarContainer from './menu_bar/menu_bar_container'
import Modal from './modal'
import LogInFormContainer from './user_signin/login_form_container'
import {AuthRoute, ProtectedRoute } from './../util/route_util'
import Footer from './footer'
import SongFormContainer from './songs/song_form_container'
import SongIndexContainer from './songs/song_index_container'
import SongShowContainer from './songs/song_show_container'
import DummyContainer from './dummy/dummy_container'
import UserContainer from './users_component/user_container'






const App = () => (

  <div>
    <Modal/>
    <Switch>
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <Route path='/' component={MenuBarContainer}/>
    </Switch>
    <Route path='/' component={DummyContainer} />
    <Switch>
      <ProtectedRoute exact path='/users/:currentUserId' component={UserContainer} />
      <Route exact path='/album/index' component={SongIndexContainer} />
      <ProtectedRoute exact path='/songs/new' component={SongFormContainer} />
      <Route exact path='/songs/:songId' component={SongShowContainer} />
      <Route exact path='/' component={MainPageContainer}/>
    </Switch>
 
    <Footer/>
  </div>
);

export default App;

