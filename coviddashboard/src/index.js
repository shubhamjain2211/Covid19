import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import CountryWisReducer from './store/reducer/CountryWiseData'
import TotalStat from './store/reducer/TotalStat'
import spreadTrends from './store/reducer/spreadTrends'
const rootReducer = combineReducers({
  countryWiseData: CountryWisReducer,
  TotalStat: TotalStat,
  SpreadTrends: spreadTrends
})
const Enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, Enhancers(
  applyMiddleware(thunk)
))
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
