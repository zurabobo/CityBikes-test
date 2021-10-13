// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App/App';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import './index.css'
import './vendor/normalize.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
document.getElementById('root'));