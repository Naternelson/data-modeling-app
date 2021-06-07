import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import DataModelCard from './components/cards/DataModelCard/DataModelCard'
function App() {
    const cardCollection = []
    for(let i = 0; i < 10; i++) cardCollection.push(<DataModelCard key={i}/>)
    return (
    <div className={"container"}>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
