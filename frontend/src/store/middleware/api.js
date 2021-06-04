//API Middleware
import axios from 'axios'
const api = ({dispatch}) => next => async action => {

    const {url, method, data, onSuccess, onError} = action.payload
    try {
        const res = await axios.request({
            baseURL: REACT_APP_BASE_URL,
            url, method, data
        })
        dispatch({type: onSuccess, payload: res.data})
    } catch(error) {
        dispatch({type: onError, payload: error})
    }
}

export default api 