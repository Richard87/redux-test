import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import todoApp from './reducers'
import {createLogger} from "redux-logger"
import thunkMiddleware from "redux-thunk"
import {fetchPostsIfNeeded} from "./actions/redditActions";

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    todoApp,
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
)
store.dispatch(fetchPostsIfNeeded('reactjs'))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
