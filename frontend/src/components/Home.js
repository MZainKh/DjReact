import React from 'react';
import {Link} from 'react-router-dom';

const home = () => (
    <div className = 'container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Hello There, this be my blog</h1>
            <p className="lead">This is just a simple project using React as frontend and Django as backend.</p>
            <hr className="my-4" />
            <p>Click the big button to check out the blog page.</p>
            <Link className="btn btn-primary btn-lg" to = '/blog' role="button">This leads to the blog Obviously</Link>
        </div>
    </div>
);

export default home;