import {createSlice} from '@reduxjs/toolkit'
//Slice
const slice = createSlice({
    name: "newCSVForm",
    initialState: {name: "", dataModel: ""},
    reducers: {
        addCSV: (state, action) => {
            return state = {
                name: action.payload.name,
                dataModel: action.payload.dataModel
            }
        },
        changeCSV: (state, action) => {
            state.size = action.payload.size
        },
        changeCSVName: (state, action) => {
            state.name = action.payload.name
        },
        changeCSVModel: (state, action) => {
            state.csv = action.payload.dataModel
        },
        clearCSVForm: () => {
            return {}
        }
    }
})

export const {addCSV, changeCSV, changeCSVName, changeCSVModel, clearCSVForm} = slice.actions
export default slice.reducer