import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import SignUpPage from './components/signup/SignUpPage';
export default (
    <div>
        <Route exact path="/" component={ App }></Route>
        <Route path="/signup" component={ SignUpPage }></Route>
    </div>
)
