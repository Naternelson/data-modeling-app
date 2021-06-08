import {combineReducers} from 'redux'
import entitiesReducer from './entities/entitiies'
import authReducer from './auth'

export default combineReducers({
    entities: entitiesReducer,
    auth: authReducer
})