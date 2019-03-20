import React, {Component} from 'react';
import classnames from "classnames";
import validateInput from '../../utils/validtion/login';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {login} from "../../actions/login";

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
    static propTypes = {
        login: PropTypes.func.isRequired,
    }
    static contextTypes= {
        router: PropTypes.object.isRequired,
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
       // this.setState({[e.target.name]:[e.target.value]}) // e使用方式理解错误
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit= (e)=> {
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{},isLoading:true});
          this.props.login(this.state)
              .then(
                  (res) => this.context.router.history.push('/'),
                  (err) => this.setState({errors:err.response.data.errors,isLoading:false})
              )
        }
    }
    render() {
        const {identifier,password,errors,isLoading} = this.state;
        return (
                <form onSubmit={this.onSubmit}>
                    <h1>login</h1>
                    { errors.form && <div className="alert alert-danger">{ errors.form }</div> }
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
                        <label className="control-label">password</label>
                        <input
                            value={password}
                            onChange={this.onChange}
                            type="password"
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
export default connect(null,{login})(LoginForm);
