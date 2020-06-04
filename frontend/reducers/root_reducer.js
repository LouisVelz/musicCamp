import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';
// import uiReducer from '/.ui_reducer';
import modalReducer from './modal_reducer'


const rootReducer = combineReducers({
  errors: errorsReducer,
  entities: entitiesReducer,
  session: sessionsReducer,
  modal: modalReducer
})

export default rootReducer;