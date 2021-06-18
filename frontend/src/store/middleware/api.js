//API Middleware
import axios from 'axios'
import * as actions from '../api'

const constructHeader = getStateFn => headers => {
    const token = getStateFn().auth.token
    console.log({state: getStateFn()})
    const auth = {'Authorization': `Bearer ${token}`}
    const standardHeader = {"Content-Type":"application/json"}
    const newHeaders =  headers && token ? {...headers, ...auth, ...standardHeader} : 
        headers && !token ? {...headers, ...standardHeader} :
        !headers && token ? {...auth, ...standardHeader} : 
        standardHeader 

    console.log(newHeaders)

    return newHeaders
}

const api = ({dispatch, getState}) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    next(action)
    let {url, method, data, onSuccess, headers, onStart, onError} = action.payload
    if(onStart) Array.isArray(onStart) ? onStart.forEach(type => dispatch({type, payload: data})) : dispatch({onStart, payload: data})
    
    headers = constructHeader(getState)(headers)
    try {
        const res = await axios.request({baseURL: process.env.REACT_APP_BASE_URL, url, method, data, headers})
        // console.log(res)
        dispatch(actions.apiCallSuccess(res.data))
        if(onSuccess) dispatch({type: onSuccess, payload: res.data})
    } catch(error) {
        dispatch(actions.apiCallFailed(error))
        if(onError) dispatch({type: onError, payload: error})
    }
}

export default api 