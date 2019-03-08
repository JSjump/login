import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import SignUp from './components/SignUp';
export default (
    <div>
        <Route exact path="/" component={ App }></Route>
        <Route path="/signup" component={ SignUp }></Route>
    </div>
)
