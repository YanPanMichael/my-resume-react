import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { Router, Route, Switch, browserHistory } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import Elements from './components/Elements/Elements';
import ResumePDF from './components/PDF/ResumePDF';
import MainPage from './components/MainPage';
import TodoListPage from './components/TodoList';
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

// 柯里化
// https://segmentfault.com/a/1190000008754562
// Add the reducer to your store on the `routing` key
const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

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
        <Route path="/my-resume" component={App} />
        <Route path="/resume-pdf" component={ResumePDF} />
        <Route path="/elements" component={Elements} />
        <Route path="/main-page" component={MainPage} />
        <Route path="/todo-page" component={TodoListPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
