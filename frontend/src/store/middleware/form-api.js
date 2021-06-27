import axios from 'axios'
import * as actions from '../api'
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
    // console.log({project: data.project, headers: data.project.getHeaders()})
    // const endPoint = process.env.REACT_APP_BASE_URL + url
    const dispatchHandler = handleDispatch(dispatch)
    const options = handleOptions(getState)({...action.payload, multi: true})
    dispatchHandler([onStart])(data) //Pre API Dispatch

    //API Request
    try {
        const res = await axios.request(options)
        dispatchHandler([actions.apiCallSuccess.type, onSuccess])(res.data) //Succesful Post Form API Call Dispatch 
    } catch(error) {
        dispatchHandler([actions.apiCallFailed.type, onError])(error) //Unsuccessful Post Form API Call Dispatch
    }
}
export default formApi 