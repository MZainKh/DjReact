import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({isAuthenticated}) => {
    const authButton = () => (
        <Fragment>
            <Link className="btn btn-primary btn-lg" to = '/blog' role="button">This leads to the blog Obviously</Link>
        </Fragment>
    )

    const guestButtons = () => (
        <Fragment>
            <p><b>Please login to view the blogs</b></p>
            <p className="mt-3">
                <Link exact to = '/login'>Login</Link>
            </p>
            <p>
                <Link exact to = '/signup'>Sign Up</Link>
            </p>
        </Fragment>
    )
    
    return (
        <div className = 'container'>
            <div className="jumbotron mt-5">
                <h1 className="display-4">Hello There, this be my blog</h1>
                <p className="lead">This is just a simple project using React as frontend and Django as backend.</p>
                <hr className="my-4" />
                <p>Click the big button to check out the blog page.</p>
                {isAuthenticated ? authButton() : guestButtons()}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Home);