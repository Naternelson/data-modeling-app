//API Middleware
//Run Multiple Dispatches on an async API Request
import axios from 'axios'
import * as actions from '../api'

const handleHeaders = getStateFn => headers => {
    //Private Function
    //Construct an Request header with standard content, available token, and/or optional headers
    const token = getStateFn().auth.token
    const auth = {'Authorization': `Bearer ${token}`}
    const standardHeader = {"Content-Type":"application/json"}
    return (
        headers && token ? {...headers, ...auth, ...standardHeader} : 
        headers && !token ? {...headers, ...standardHeader} :
        !headers && token ? {...auth, ...standardHeader} : 
        standardHeader
        ) 
}

const handleOptions = getState =>  payload => {
    //Private Function
    //Construct axios request options
    const {url, method, data, headers} = payload
    return {
        baseURL: process.env.REACT_APP_BASE_URL, 
        url, method, data, 
        headers: handleHeaders(getState)(headers) 
    }
}

const handleDispatch = dispatch => dispatches => data => {
    dispatches = dispatches.filter( d => !!d)
    //Private Function
    //Dispatch Actions
    console.log({dispatch,dispatches, data})

    dispatches.forEach( d => {if(d) {
        console.log({d})
        Array.isArray(d) ? d.forEach(type => dispatch({type, payload: data})) :
        dispatch({type: d, payload: data})
    }})
}

const api = ({dispatch, getState}) => next => async action => {
    const dispatchHandler = handleDispatch(dispatch)
    //Check for API Request
    if (action.type !== actions.apiCallBegan.type) return next(action)
    next(action)
    let {data, onSuccess, onStart, onError} = action.payload
    //Before Request Dispatches
    dispatchHandler([onStart])(data)
    // if(onStart) {
    //     Array.isArray(onStart) ? 
    //         onStart.forEach(type => dispatch({type, payload: data})) : 
    //         dispatch({onStart, payload: data})
    // }
    
    //Begin API Request
    
    try {
        //Request
        const res = await axios.request(handleOptions(getState)(action.payload))
        //After Request Dispatches 
        dispatchHandler([actions.apiCallSuccess.type, onSuccess])(res.data)
        // dispatch(actions.apiCallSuccess(res.data))
        // if(onSuccess) dispatch({type: onSuccess, payload: res.data})

    } catch(error) {
        //Error Dispatches
        dispatchHandler([actions.apiCallFailed.type, onError])(error)
        // dispatch(actions.apiCallFailed(error))
        // if(onError) dispatch({type: onError, payload: error})
    }
}

export default api 