import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import './index.css'
import App from './components/App'
// import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

var middlewares = [thunk];
if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

// 柯里化
// https://segmentfault.com/a/1190000008754562
const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();