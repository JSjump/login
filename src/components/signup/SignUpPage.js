import React,{Component} from 'react';
import SignUpForm from './SignUpForm';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {userSignupRequest} from '../../actions/signup';
import {addFlashMessage} from '../../actions/flashMessages';



class SignUpPage extends Component{
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage: PropTypes.func.isRequired,
    } // 静态属性
    render() {
        const {addFlashMessage,userSignupRequest} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <SignUpForm
                            addFlashMessage = {addFlashMessage}
                            userSignupRequest={ userSignupRequest}></SignUpForm>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}
// SignUpPage.propTypes={
//     userSignupRequest: PropTypes.func.isRequired,
// } // 静态属性
export default connect(null,{ userSignupRequest, addFlashMessage })(SignUpPage);
