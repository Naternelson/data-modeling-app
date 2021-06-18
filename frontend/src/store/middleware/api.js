//API Middleware
import axios from 'axios'
import * as actions from '../api'

const constructHeader = getStateFn => headers => {
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

const api = ({dispatch, getState}) => next => async action => {
    //Check for API Request
    if (action.type !== actions.apiCallBegan.type) return next(action)
    next(action)

    //Before Request Dispatches
    if(onStart) Array.isArray(onStart) ? onStart.forEach(type => dispatch({type, payload: data})) : dispatch({onStart, payload: data})
    
    //Begin API Request
    let {url, method, data, onSuccess, headers, onStart, onError} = action.payload
    const options = {
        baseURL: process.env.REACT_APP_BASE_URL, 
        url, 
        method, 
        data, 
        headers: constructHeader(getState)(headers) 
    }
    try {
        //Request
        const res = await axios.request(options)
        //After Request Dispatches 
        dispatch(actions.apiCallSuccess(res.data))
        if(onSuccess) dispatch({type: onSuccess, payload: res.data})

    } catch(error) {
        //Error Request Dispatches
        dispatch(actions.apiCallFailed(error))
        if(onError) dispatch({type: onError, payload: error})
    }
}

export default api 