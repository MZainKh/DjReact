import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => { 
    const guestLinks = () => (
        <Fragment>
            <li className="nav=item">
                <NavLink className="nav-link" exact to = '/login'>Login</NavLink>
            </li>
            <li className="nav=item">
                <NavLink className="nav-link" exact to = '/signup'>Sign Up</NavLink>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" exact to = '/blog'>Blog</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to='#!' onClick={logout}>Logout</NavLink>
            </li>
        </Fragment>
    );

    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to = '/'>Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact to = '/'>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    {isAuthenticated ? authLinks() : guestLinks()}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);