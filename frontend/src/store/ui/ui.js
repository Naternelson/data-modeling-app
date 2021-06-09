import {combineReducers} from 'redux'
import homeReducer from "./home/home"

export default combineReducers({
    home: homeReducer
})