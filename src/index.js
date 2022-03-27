import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";

// store.subscribe(()=>{console.log(store.getState())})   it display the content of the redux store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>   {/* using provider tag we pass the store object(centralized data) so that this data we easily access for app or it child component */}
    <App />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
