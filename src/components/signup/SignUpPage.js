import React,{Component} from 'react';
// import SignUpForm  from './SignUpForm';
import SignUpForm from './SignUpForm';
class SignUpPage extends Component{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <SignUpForm></SignUpForm>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}
export default SignUpPage;
