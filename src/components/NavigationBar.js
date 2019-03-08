import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" to="/">ReduxLogin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                        aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample05">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/signup'>Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}
export default NavigationBar;
