import {createSlice} from '@reduxjs/toolkit'
import { apiFormCallBegan } from '../api'
//Slice
const slice = createSlice({
    name: "newProjectForm",
    initialState: { loading: false, name: "", model: "", filePresent: false},
    reducers: {
        fileIsPresent: (state) => {
            state.filePresent = true
        },
        fileIsAbsent: (state) => {
            state.filePresent = false
        },
        projectNameChanged: (state, action) => {
            state.name = action.payload.name || " "
        },
        modelChanged: (state, action) => {
            state.model = action.payload.model
        },
        formLoading: (state)=>{
            state.loading = true
        },
        formCleared: () => {
            return {loading: false, name: "", model: "", filePresent: false}
        }
    }
})
export const {fileIsPresent, fileIsAbsent, projectNameChanged, modelChanged, formCleared} = slice.actions
export default slice.reducer

export const uploadProject = data => apiFormCallBegan({
    data,
    url: "/projects"
    })