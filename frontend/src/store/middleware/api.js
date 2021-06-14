//API Middleware
import axios from 'axios'
import * as actions from '../api'

// function api({passing in the dispatch funciton from the store}){
//       function next(){} representing the next 
// }
const api = ({dispatch}) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    next(action)
    const {url, method, data, onSuccess, onError} = action.payload
    try {
        const res = await axios.request({baseURL: process.env.REACT_APP_BASE_URL, url, method, data})
        dispatch(actions.apiCallSuccess(res.data))
        if(onSuccess) dispatch({type: onSuccess, payload: res.data})
    } catch(error) {
        dispatch(actions.apiCallFailed(error))
        if(onError) dispatch({type: onError, payload: error})
    }
}

export default api 