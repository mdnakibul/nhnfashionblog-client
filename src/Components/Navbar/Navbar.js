import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import avatar from '../../images/avatar.png'
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser,SetLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <Link to="/" className="navbar-brand">N-Fshion</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Nature</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Animal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Tricks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Fasion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Tech</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin Panel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;