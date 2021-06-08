import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import StoreContext from './store/configureStore'
import { Provider } from 'react-redux'

const store = StoreContext()
function App() {
    return (
      <Provider store={store}>
        <div className={"container"}>
          <Navbar/>
          <Main/>
        </div>
      </Provider>
    
  );
}

export default App;
