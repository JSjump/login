import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logOut} from '../actions/login';
class NavigationBar extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logOut:PropTypes.func.isRequired,
    }
    logOut =(e) => {
        e.preventDefault();
        this.props.logOut();
    }
    render() {
        const {isAuthenticated} =this.props.auth;
        const userLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={this.logOut}>Logout</a>
                </li>
            </ul>
        )
        const questLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" to="/">ReduxLogin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                        aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample05">
                    {isAuthenticated? userLink:questLink}
                </div>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => { // mapStateToProps 是一个函数，返回一个对象
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps,{logOut})(NavigationBar);
