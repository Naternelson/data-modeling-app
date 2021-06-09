import {combineReducers} from 'redux'
import NewCSVFormReducer from "./newCSV"

export default combineReducers({
    newCSVForm: NewCSVFormReducer
})