import {createSlice} from '@reduxjs/toolkit'
import { apiCallBegan } from './api'
//Slice
const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false, 
        id: null, 
        loading: false,
        lastFetch: null,
        user: {}
    },
    reducers: {
        userAuthenticated: (state, action) => {
            state.isLoggedIn = true
            state.id = action.payload.id || action.payload.user.id 
            state.user = action.payload.user 
        },
        userChanged: (state, action) => {
            state.user = action.payload.user 
        },
        logoutUser: (state) => {
            state.isLoggedIn = false
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
    data,
    onSuccess: userAuthenticated.type,
})
