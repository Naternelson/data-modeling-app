import {createSlice} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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
            for(let i of action.payload.projects){
                state.data[i.id] = i
                state.data[i.id].loadStatus = LOADED 
                state.order.push(i)
            }
            state.status = LOADED
        },
        projectsDeleted: (state, action) => {
            if(action.all){
                state.order = []
                state.data = {}
                return
            }
            if(action.payload.ids){
                for(let id of action.payload.ids) delete state.data[id]
                state.order.filter(id => !action.payload.includes(id) )
            }
            if (action.payload.id) delete state.data[action.payload.id]
            state.status = LOADED
        },
        projectUpdated: (state, action) => {
            state.data[action.payload.project.id] = action.payload.project 
            state.data[action.payload.project.id].loadStatus = LOADED
        },
        inError: (state, action) => {
            state.status = ERRORSTATUS,
            state.error = action.payload.error 
        },
        projectsLoading: (state, action) => {
            if(action.payload.id) {
                state.data[action.payload.id].loadStatus = LOADING
            } else {
                delete state.error; 
                state.status = LOADING
            }
            
        } 

    }
})

export const {projectsAdded, projectsDeleted, projectUpdated} = slice.actions
const {inError, projectsLoading} = slice.actions
export default slice.reducer

export const loadProjects = data => () => {
    const dispatch = useDispatch()
    dispatch(projectsLoading())
    return apiCallBegan({
        url: "/projects",
        method: 'get',
        data: data.data,
        onSuccess: projectsAdded.type,
        onError: inError.type
    })
}
export const patchProject = data => () => {
    const dispatch = useDispatch()
    dispatch(projectsLoading(data.data.id))
    return apiCallBegan({
        url: `/projects/${data.data.id}`,
        method: 'patch',
        data: data.data,
        onSuccess: projectUpdated.type,
        onError: inError.type
    })
}
export const loadProject = data => () => {
    const dispatch = useDispatch()
    dispatch(projectsLoading(data.data.id))
    return apiCallBegan({
        url: `/projects/${data.data.id}`,
        method: 'get',
        data: data.data,
        onSuccess: projectUpdated.type,
        onError: inError.type
    })
}