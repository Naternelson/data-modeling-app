import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import reducer from './products'
export default function configureStore(){
    return createStore(reducer, devToolsEnhancer)
}
const store = createStore(reducer)
export default store 