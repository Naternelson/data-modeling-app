import {createSlice} from '@reduxjs/toolkit'
import { apiCallBegan } from '../middleware/middleware-actions'
const statusTypes =  {LOADING: "loading", LOADED: "loaded", ERRORSTATUS: "error"}
const {LOADING, LOADED, ERRORSTATUS} = statusTypes

//Slice
const slice = createSlice({
    name: "projects",
    initialState: {
        status: LOADING,
        order: [],
        data: {},
    },
    reducers: {
        projectsAdded: (state, action) => {
            state.data = {}
            state.order = []
            for(let i of action.payload.projects.data){
                state.data[i.id] = i.attributes
                state.data[i.id].loadStatus = LOADED 
                state.order.push(i.id)
            }
            state.status = LOADED
        },
        projectDeleted: (state, action) => {
            const id = action.payload.project.id
            delete state.data[action.payload.project.id]

            state.order = state.order.filter(i => i.toString() !== id.toString())

            state.status = LOADED
        },
        projectUpdated: (state, action) => {
            const id = action.payload.project.data.id
            const arrIndex = state.order.indexOf(id)

            state.data[id] = action.payload.project.data.attributes
            if(arrIndex === -1) state.order.push(id)
            state.data[id].loadStatus = LOADED
        },
        inError: (state, action) => {
            state.status = ERRORSTATUS
            state.error = action.payload.error 
        },
        projectsLoading: (state, action) => {

            // if(action && action.payload.id) {
            //     state.data[action.payload.id].loadStatus = LOADING
            // } else {
            //     delete state.error; 
            //     state.status = LOADING
            // }
            return state
        } 

    }
})

export const {projectsAdded, projectDeleted, projectUpdated} = slice.actions
const {inError, projectsLoading} = slice.actions
export default slice.reducer

export const loadProjects = () => apiCallBegan({
        url: "/projects",
        method: 'get',
        onStart: projectsLoading.type,
        onSuccess: projectsAdded.type,
        onError: inError.type
    })

export const patchProject = data => apiCallBegan({
        url: `/projects/${data.id}`,
        method: 'patch',
        data,
        onSuccess: projectUpdated.type,
        onError: inError.type
    })

export const loadProject = data =>  apiCallBegan({
        url: `/projects/${data.id}`,
        method: 'get',
        data: data,
        onStart: projectsLoading.type,
        onSuccess: projectUpdated.type,
        onError: inError.type
    })
export const deleteProject = data =>  apiCallBegan({
    url: `/projects/${data.id}`,
    method: 'delete',
    onSuccess: projectDeleted.type,
    onError: inError.type
})