import {createSlice} from '@reduxjs/toolkit'
//Slice
const slice = createSlice({
    name: "CSVForm",
    initialState: {focus: false, ready: false, errors: {}},
    reducers: {
        toggleFormFocus: (state) => {
            state.focus = !state.focus
        },
        changeFormFocus: (state, action) => {
            state.focus = !!action.payload.focus
        },
        focusForm: (state) => {
            state.focus = true
        },
        blurForm: (state) => {
            state.form = false
        },
        resetForm: () => {
            return {focus: false, ready: false, errors: {}}
        },
        formReady: (state) => {
            state.ready = true
        },
        formNotReady: (state) => {
            state.ready = false
        },
        toggleFormReady: (state) => {
            state.ready = !state.ready
        },
        addErrors: (state, action) => {
            let nextErr = Object.keys(state.errors).length && Math.max(...Object.keys(state.errors).map((e)=>parseInt(e, 10))) + 1
            for(let i of action.payload.errors){
                state.errors[nextErr] = action.payload.errors[i]
                ++nextErr
            }
        },
        removeErrors: (state, action) => {
            if (action.payload?.all) return state.errors = {} 
            for(let i of action.payload.errors) delete state.errors[i]
        }
    }
})

export const {toggleFormFocus, changeFormFocus, focusForm, blurForm, resetForm, formReady, formNotReady, toggleFormReady, addErrors, removeErrors} = slice.actions
export default slice.reducer