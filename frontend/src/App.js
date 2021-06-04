import './App.css';


function App() {
  function clickHandler(){
    const url = "http://localhost/3001/users"
    const data = {
      user: {
        username: "naternelson", 
        email: "email@email.com", 
        password: 1234, 
        first_name: "Mr.", 
        last_name: "Smith", 
        password_confirmation: 1234
      }
    }
    const options = {
      method: "POST",
      headers: {Authorization: 'Bearer token'},
      body: JSON.stringify(data)
    }
    fetch(url, options).then((res)=>res.json()).then((res)=>console.log("Success", res)).catch((mes) => console.log("FAILED", mes))
  }
  return (
    <button onClick={clickHandler}>Click Me</button>
  );
}

export default App;
