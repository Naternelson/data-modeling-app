import {combineReducers} from 'redux'
import productReducer from './products'
import projectReducer from './projects'

export default combineReducers({
    products: productReducer,
    projects: projectReducer
})