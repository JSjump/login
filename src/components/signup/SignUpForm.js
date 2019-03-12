import React ,{ Component } from 'react';
import PropTypes from 'prop-types'
class SignUpForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        }
    }
    // static propTypes = {
    //     userSignupRequest: PropTypes.func.isRequired,
    // }
    onChange(e) {// react 的数据双向绑定
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        this.props.userSignupRequest(this.state);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}
                        type="text"
                    name="username"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        name="email"
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        name="password"
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">passwordConfirmation</label>
                    <input
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        name="passwordConfirmation"
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
SignUpForm.propTypes={
    userSignupRequest:PropTypes.func.isRequired,
} //   为什么要这样用静态属性
export default SignUpForm;
