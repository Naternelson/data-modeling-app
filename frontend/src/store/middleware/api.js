//API Middleware
import axios from 'axios'
import * as actions from '../api'

const api = ({dispatch, getState}) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    next(action)
    let {url, method, data, onSuccess, headers, onError} = action.payload
    const token = getState().auth.token
    const auth = {'Authorization': `Bearer ${token}`}
    const standardHeader = {Content:""}
    headers = headers ? token ? {...headers, ...auth, ...standardHeader} : {...headers, ...standardHeader} : standardHeader 
    try {
        const res = await axios.request({baseURL: process.env.REACT_APP_BASE_URL, url, method, data, headers})
        dispatch(actions.apiCallSuccess(res.data))
        if(onSuccess) dispatch({type: onSuccess, payload: res.data})
    } catch(error) {
        dispatch(actions.apiCallFailed(error))
        if(onError) dispatch({type: onError, payload: error})
    }
}

export default api 