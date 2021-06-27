import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer"
import api from './middleware/api'
import formApi from './middleware/form-api'
export default function ConfirgureStore(){
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), api, formApi]
    })
}