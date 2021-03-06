import React ,{ Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
// import {withRouter} from "react-router-dom"; // 路由跳转中的一种方法

class SignUpForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false,
        }
    }
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage: PropTypes.func.isRequired,
        clientCheck: PropTypes.func.isRequired,
    }
    static contextTypes = { // 路由跳转的另外一种方法
        router:PropTypes.object,
    }
    onChange(e) {// react 的数据双向绑定
        this.setState({[e.target.name]:e.target.value})
    }
    clientCheck= (e) => {
        const filed =e.target.name;
        const val = e.target.value;
        if(val !== ''){
            this.props.clientCheck(val).then(res =>{
               let  errors =this.state.errors;
               let invalid;
               if(res.data.user){
                   errors[filed] = "There is user with such " + filed;
                   invalid = true;
               }else{
                   errors[filed]='';
                   invalid = false;
               }
               this.setState({errors,invalid})
            })
        }
    }
    async onSubmit(e) {
        try {
            e.preventDefault();
            this.setState({isLoading: true});
            const {data} =  await this.props.userSignupRequest(this.state);
            this.props.addFlashMessage({
                type: "success",
                text: "You signed up successfully. welcome"
            });
            this.context.router.history.push('/')

        }catch (e) {
            this.setState({ errors: e.response.data,isLoading:false})
        }
    }
    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        onBlur={this.clientCheck}
                    name="username"
                    className={classnames('form-control',{'is-invalid':errors.username})}/>
                    {errors.username && <span className='form-text text-muted'>{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        name="email"
                        onBlur={this.onBlur}
                        className={classnames('form-control',{'is-invalid':errors.email})}/>
                    {errors.email && <span className='form-text text-muted'>{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                        type="password"
                        name="password"
                        className={classnames('form-control',{'is-invalid':errors.password})}/>
                    {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">passwordConfirmation</label>
                    <input
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                        type="password"
                        name="passwordConfirmation"
                        className={classnames('form-control',{'is-invalid':errors.passwordConfirmation})}/>
                    {errors.passwordConfirmation && <span className='form-text text-muted'>{errors.passwordConfirmation}</span>}
                </div>

                <div className="form-group">
                    <button
                        disabled={this.state.isLoading || this.state.invalid}
                        className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}
// SignUpForm.propTypes={
//     userSignupRequest:PropTypes.func.isRequired,
// } //   为什么要这样用静态属性
// export default withRouter(SignUpForm);
export default SignUpForm;
