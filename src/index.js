import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReduce from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter as Router} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import routes from './routers';

const store = createStore(
    rootReduce,
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
            <NavigationBar></NavigationBar>
                <div className="container">
                    { routes }
                </div>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
