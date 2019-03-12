import React,{Component} from 'react';
import SignUpForm from './SignUpForm';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {userSignupRequest} from '../../actions/signup';


class SignUpPage extends Component{
    // static propTypes = {
    //     userSignupRequest: PropTypes.func.isRequired,
    // } // 静态属性
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <SignUpForm userSignupRequest={this.props.userSignupRequest}></SignUpForm>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}
SignUpPage.propTypes={
    userSignupRequest: PropTypes.func.isRequired,
} // 静态属性
export default connect(null,{ userSignupRequest })(SignUpPage);
