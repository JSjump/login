import React,{Component} from 'react';
import LoginForm from './LoginForm';
import {connect} from "react-redux";


class LoginPage extends Component{
    render() {
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <LoginForm></LoginForm>
                </div>
                <div className="col-sm-3"></div>

            </div>
        )
    }
}
export default connect()(LoginPage);
