import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import StoreContext from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/user/login/Login'

const store = StoreContext()
function App() {
    return (
      <Provider store={store}>
        <Router>
            <>
                <Navbar/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
            </>
        </Router>
      </Provider>
    
  );
}

export default App;
