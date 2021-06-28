//API Middleware
//Run Multiple Dispatches on an async API Request
import axios from 'axios'
import * as actions from './middleware-actions'

const handleHeaders = getStateFn => headers => multi =>  {
    //Private Function
    //Construct an Request header with standard content, available token, and/or optional headers
    const token = getStateFn().auth.token
    const auth = {'Authorization': `Bearer ${token}`}
    const standardHeader = {"Content-Type": multi ? "multipart/form-data" : "application/json"}
    return (
        headers && token ? {...headers, ...auth, ...standardHeader} : 
        headers && !token ? {...headers, ...standardHeader} :
        !headers && token ? {...auth, ...standardHeader} : 
        standardHeader
        ) 
}

export const handleOptions = getState =>  payload => {
    //Private Function
    //Construct axios request options
    const {url, method, data, headers, multi } = payload

    return {
        baseURL: process.env.REACT_APP_BASE_URL, 
        url, method, data, 
        headers: handleHeaders(getState)(headers)(multi)
    }
}

export const handleDispatch = dispatch => dispatches => data => {
    //Private Function
    //Dispatch Actions
    dispatches = dispatches.filter( d => !!d)
    dispatches.forEach( d => {
        if(d) {
            Array.isArray(d) ? d.forEach(type => dispatch({type, payload: data})) :
                dispatch({type: d, payload: data})
    }})
}

const api = ({dispatch, getState}) => next => async action => {
    //Check for API Request
    if (action.type !== actions.apiCallBegan.type) return next(action) //Next MiddleWare Action if not an api call
    next(action)


    let {data, onSuccess, onStart, onError} = action.payload
    const dispatchHandler = handleDispatch(dispatch)

    console.log({onStart, data})
    dispatchHandler([onStart])(data) //Pre API Dispatch

    //API Request
    try {
        const res = await axios.request(handleOptions(getState)(action.payload))
        dispatchHandler([actions.apiCallSuccess.type, onSuccess])(res.data) //Succesful Post API Call Dispatch 
    } catch(error) {
        dispatchHandler([actions.apiCallFailed.type, onError])(error.message) //Unsuccessful Post API Call Dispatch
    }
}

export default api 