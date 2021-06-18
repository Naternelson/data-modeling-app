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
            state.token = action.payload.jwt
            state.id = action.payload.user.data.id
            state.user = action.payload.user.data.attributes
            state.loading = false
        },
        userChanged: (state, action) => {
            state.user = action.payload.user.attributes
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

export const signupUser = data => apiCallBegan({
    url: "/signup",
    method: 'post',
    data: {user: data.data},
    onSuccess: userAuthenticated.type
})
