import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';
import uiReducer from './ui_reducer';



const rootReducer = combineReducers({
  errors: errorsReducer,
  entities: entitiesReducer,
  session: sessionsReducer,
  ui: uiReducer
})

export default rootReducer;