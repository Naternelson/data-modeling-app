import {combineReducers} from 'redux'
import entitiesReducer from './entitiies'
import authReducer from './auth'

export default combineReducers({
    entities: entitiesReducer
})