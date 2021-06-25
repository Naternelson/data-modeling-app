import {combineReducers} from 'redux'
import NewProjectFormReducer from "./project-upload-form"

export default combineReducers({
    newProject: NewProjectFormReducer
})