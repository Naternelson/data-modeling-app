import {combineReducers} from 'redux'
import entitiesReducer from './entities/entities'
import authReducer from './auth'
import formsReducer from './forms/forms'
import uiReducer from './ui/ui'

export default combineReducers({
    entities: entitiesReducer,
    forms: formsReducer,
    ui: uiReducer,
    auth: authReducer
})