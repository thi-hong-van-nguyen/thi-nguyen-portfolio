import { combineReducers } from 'redux'
import activeReducer from './activeReducer'
import darkModeReducer from './darkModeReducer'

const rootReducer = combineReducers({
    activeReducer,
    darkModeReducer,
});

export default rootReducer