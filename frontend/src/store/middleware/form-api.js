import axios from 'axios'
import * as actions from './middleware-actions'
import {handleDispatch, handleOptions} from './api'

// const auth = getStateFn => {
//     const token = getStateFn().auth.token
//     return {'Authorization': `Bearer ${token}`}
// }

const formApi = ({dispatch, getState}) => next => async action => {
    //Check for API Request
    if (action.type !== actions.apiFormCallBegan.type) return next(action) //Next MiddleWare Action if not an api call
    next(action)

    
    let { data, onSuccess, onStart, onError} = action.payload
    const dispatchHandler = handleDispatch(dispatch)
    const options = handleOptions(getState)({...action.payload, multi: true, method: 'post'})
    dispatchHandler([onStart])(data) //Pre API Dispatch

    //API Request
    try {
        const res = await axios.request(options)
        dispatchHandler([actions.apiCallSuccess.type, onSuccess])(res.data) //Succesful Post Form API Call Dispatch 
    } catch(error) {
        dispatchHandler([actions.apiCallFailed.type, onError])(error.message) //Unsuccessful Post Form API Call Dispatch
    }
}
export default formApi 