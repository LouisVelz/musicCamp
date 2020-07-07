import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import songsErrorsReducer from './songs_errors_reducer';
import albumErrorsReducer from './albums_errors_reducer';



const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  songs: songsErrorsReducer,
  albums: albumErrorsReducer
})

export default errorsReducer;