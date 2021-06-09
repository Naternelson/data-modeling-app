import {createSlice} from '@reduxjs/toolkit'
//Slice
const slice = createSlice({
    name: "CSVForm",
    initialState: {focus: "blurred", status: false, errors: {}},
    reducers: {
        transitionFormOn: (state) => {
            state.focus = "transitioningOn"
        },
        transitionFormOff: (state) => {
            state.focus = "transitioningOff"
        },
        focusForm: (state) => {
            state.focus = "focused"
        },
        blurForm: (state) => {
            state.focus = "blurred"
        },
        resetForm: () => {
            return {focus: "blurred", status: "incomplete", errors: {}}
        },
        formReady: (state) => {
            state.status = "ready"
        },
        formNotReady: (state) => {
            state.status = "incomplete"
        },
        addErrors: (state, action) => {
            for(let i in action.payload.errors){
                state.errors[i] = action.payload.errors[i]
            }

        },
        removeErrors: (state, action) => {
            if (action.payload?.all) return state.errors = {} 
            for(let i of action.payload.errors) {
                const err = action.payload.errors[i]
                if (state.errors[err]) delete state.errors[err]
            }
        }
    }
})

export const {transitionFormOn, transitionFormOff, focusForm, blurForm, resetForm, formReady, formNotReady, addErrors, removeErrors} = slice.actions

export default slice.reducer