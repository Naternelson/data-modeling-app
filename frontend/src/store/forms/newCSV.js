import {createSlice} from '@reduxjs/toolkit'
//Slice
const slice = createSlice({
    name: "newCSVForm",
    initialState: {},
    reducers: {
        addCSV: (state, action) => {
            state = {
                csv: action.payload.csv,
                name: action.payload.name,
                dataModel: action.payload.dataModel
            }
        },
        changeCSV: (state, action) => state.csv = action.payload.csv,
        changeCSVName: (state, action) => state.name = action.payload.name,
        changeCSVModel: (state, action) => state.csv = action.payload.dataModel,
        clearCSVForm: (state, action) => state = {}
    }
})

export const {addCSV, changeCSV, changeCSVName, changeCSVModel, clearCSVForm} = slice.actions
export default slice.reducer