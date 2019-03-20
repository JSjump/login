import React, {Component} from 'react';
import classnames from "classnames";
import validateInput from '../../utils/validtion/login';
// import PropTyps from 'prop-types';
class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors:{},
            isLoading:false,
        }
    }
    isValid = () => {
        const {errors,isValid} = validateInput(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }

    onChange = (e) => {
        // this.setState({identifier,password,errors,isLoading}) // setState 理解错误
        // this.setState({e.target.name = e.target.value})  // e使用方式理解错误
        this.setState({[e.target.name]:[e.target.value]})
    }

    onSubmit= (e)=> {
        e.preventDefault();
        if(this.isValid()){

        }
    }
    render() {
        const {identifier,password,errors,isLoading} = this.state;
        return (
                <form onSubmit={this.onSubmit}>
                    <h1>login</h1>
                    <div className="form-group">
                        <label className="control-label">Username/email</label>
                        <input
                            value={identifier}
                            onChange={this.onChange}
                            type="text"
                            name="identifier"
                            className={classnames('form-control',{'is-invalid':errors.identifier})}/>
                        {errors.identifier && <span className='form-text text-muted'>{errors.identifier}</span>}
                    </div>
                    <div className="form-group">
                        <label className="control-label">email</label>
                        <input
                            value={password}
                            onChange={this.onChange}
                            type="text"
                            name="password"
                            className={classnames('form-control',{'is-invalid':errors.password})}/>
                        {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <button
                            disabled={isLoading}
                            className="btn btn-primary btn-lg">
                            Sign up
                        </button>
                    </div>

                </form>
        )
    }
}
export default LoginForm;
