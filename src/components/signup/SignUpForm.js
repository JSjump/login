import React ,{ Component } from 'react';
class SignUpForm extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <form>
                <h1>join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                    name="username"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}
export default SignUpForm;
