import {createSlice} from '@reduxjs/toolkit'
import { apiCallBegan } from './api'
//Slice
const slice = createSlice({
    name: "auth",
    initialState: {
        token: null, 
        id: null, 
        loading: false,
        lastFetch: null,
        user: {}
    },
    reducers: {
        userAuthenticated: (state, action) => {
            state.token = action.payload.data.jwt
            state.id = action.payload.data.id
            state.user = action.payload.data.user.attributes
            state.loading = false
        },
        userChanged: (state, action) => {
            state.user = action.payload.data.user.attributes
        },
        logoutUser: (state) => {
            state.token = null
            state.id = null
            state.loading = false
            state.user = {}
        } 
    }
})
const { userAuthenticated } = slice.actions
export const { userChanged, logoutUser } = slice.actions
export default slice.reducer

// Action Creators

export const loginUser = data => apiCallBegan({
    url: "/login",
    method: 'post',
    data: data.data,
    onSuccess: userAuthenticated.type
})
