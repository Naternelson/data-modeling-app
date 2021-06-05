import {createSlice} from '@reduxjs/toolkit'
let lastId = 0
//Slice
const slice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push({
                id: ++lastId,
                sku: action.payload.sku,
                name: action.payload.name 
            })
        },
        deleteProduct: (state, action) => state.filter(p => p.id !== action.payload.id),
        changeProduct: (state, action) => {
            const index = state.findIndex(p => p.id === action.payload.id)
            state[index].sku = action.payload.sku
            state[index].name = action.payload.name 
        },
        changeSKU: (state, action) => {
            const index = state.findIndex(p => p.id === action.payload.id)
            state[index].sku = action.payload.sku
        },
        changeName: (state, action) => {
            const index = state.findIndex(p => p.id === action.payload.id)
            state[index].name = action.payload.name 
        }
    }
})

export const {addProduct, deleteProduct, changeProduct, changeName, changeSKU} = slice.actions
export default slice.reducer