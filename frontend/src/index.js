import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore'
const store = configureStore()

 ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// const unsubscribe = store.subscribe(()=>{
//   console.log("Store Changed", store.getState())
// })
// store.dispatch({
//   type: "addProduct",
//   payload: {
//     sku: "TEST-1234", 
//     name: "I am a Name"
//   }
// })

// unsubscribe()
// store.dispatch({
//   type: "deleteProduct",
//   payload: {
//     id: 1
//   }
// })

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
