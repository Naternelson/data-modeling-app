import {combineReducers} from 'redux'
import entitiesReducer from './entities/entities'
import authReducer from './auth'
import formsReducer from './forms/forms'

export default combineReducers({
    entities: entitiesReducer,
    forms: formsReducer,
    auth: authReducer
})