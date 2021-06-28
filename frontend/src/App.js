import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/hero/HomeMain'
import StoreContext from './store/configureStore'
import {saveState, loadState} from './store/localStorage'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/user/login/Login'
import Signup from './components/user/signup/Signup'
import ProjectMain from './components/main/projects/Main';

const persistedState = loadState()
const store = StoreContext(persistedState)

store.subscribe(()=>{
  saveState({
    auth: store.getState().auth,
    entities: store.getState().entities
  })
})
function App() {
    return (
      <Provider store={store}>
        <Router>
            <>
                <Navbar/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/projects" component={ProjectMain}/>
            </>
        </Router>
      </Provider>
    
  );
}

export default App;
