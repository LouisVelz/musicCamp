import React from "react";
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute } from './../util/route_util'
import Modal from './modal/modal'
import LogInFormContainer from './user_signin/login_form_container'
import MenuBarContainer from './menu_bar/menu_bar_container'
import DummyContainer from './dummy/dummy_container'
import MainPageContainer from './main_page/main_page_container'
import UserContainer from './users_component/user_container'
import SongFormContainer from './songs/song_form_container'
import AlbumShowContainer from "./albums/album_show_container";
import SongShowContainer from './songs/song_show_container'
import Footer from './footer/footer'
import Disclaimer from './disclaimer/disclaimer'
import AlbumFormContainer from './albums/album_form_container'

const App = () => (

  <div>
    <Modal/>
    <Switch>
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <Route path='/' component={MenuBarContainer}/>
    </Switch>
    <Route path='/' component={DummyContainer} />
    <Switch>
      <ProtectedRoute exact path='/songs/new' component={SongFormContainer} />
      <ProtectedRoute exact path='/albums/new' component={AlbumFormContainer} />
      <Route exact path='/users/:userId' component={UserContainer} />
      <Route exact path='/albums/:albumId' component={AlbumShowContainer} />
      <Route exact path='/songs/:songId' component={SongShowContainer} />
      <Route exact path='/disclaimer' component={Disclaimer} />
      <Route exact path='/' component={MainPageContainer}/>
    </Switch>
    <Footer/>
  </div>
);

export default App;

