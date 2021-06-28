import {createSlice} from '@reduxjs/toolkit'
import { apiFormCallBegan } from '../middleware/middleware-actions'
import {blurForm} from '../ui/home/newProjectForm'

export const STATUS = {
    unsubmitted: "UNSUBMITTED",
    error: "ERROR",
    sumbitted: "SUBMITTED"
}
Object.freeze(STATUS)

//Slice
const slice = createSlice({
    name: "newProjectForm",
    initialState: { loading: false, name: "", model: "", filePresent: false, status: STATUS.unsubmitted},
    reducers: {
        fileIsPresent: (state) => {
            state.filePresent = true
            state.status = STATUS.unsubmitted
        },
        fileIsAbsent: (state) => {
            state.filePresent = false
            state.status = STATUS.unsubmitted
        },
        projectNameChanged: (state, action) => {
            state.name = action.payload.name || " "
            state.status = STATUS.unsubmitted
        },
        modelChanged: (state, action) => {
            state.model = action.payload.model
            state.status = STATUS.unsubmitted
        },
        formLoading: (state)=>{
            state.loading = true
            state.status = STATUS.unsubmitted
        },
        errorResolved: (state) => {
            delete state.error
            state.status = STATUS.unsubmitted
        },
        formCleared: () => {
            return {loading: false, name: "", model: "", filePresent: false, status: STATUS.unsubmitted}
        },
        formSuccess: (state) => {
            state.status = STATUS.sumbitted}
        },
        formError: (state, action) => {
            state.status =  STATUS.error
            state.error = action.payload.error
        }
    }
)
export const {fileIsPresent, fileIsAbsent, projectNameChanged, modelChanged, formCleared, formLoading, formSuccess, formError} = slice.actions
export default slice.reducer

export const uploadProject = data => apiFormCallBegan({
    data,
    url: "/projects",
    onSuccess: [formSuccess.type, blurForm.type ]
    })