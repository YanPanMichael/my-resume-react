import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// import { Router, Route, Switch, browserHistory } from 'react-router'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import './index.css'
import App from './components/App'
// import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

var middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

// 柯里化
// https://segmentfault.com/a/1190000008754562
// Add the reducer to your store on the `routing` key
const store = compose(applyMiddleware(...middlewares))(createStore)(
  combineReducers({
    ...rootReducer,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {/* V3 version, Tell the Router to use our enhanced history */}
    {/* <Router history={history}>
      <Route path="/" component={App}>
        <Route path="mainPage" component={MainPage} />
      </Route>
    </Router> */}
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
