import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer"
import api from './middleware/api'
import formApi from './middleware/form-api'
import {apiFormCallBegan} from './middleware/middleware-actions'
export default function ConfirgureStore(){
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(({serializableCheck: {ignoredActions: [apiFormCallBegan.type]},})), 
            api, formApi
        ]
    })
}