import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
import Activate from './components/Activate';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
<Provider store = {store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route exact path = '/blog' component = {Blog} />
                    <Route exact path = '/category/:id' component = {Category} />
                    <Route exact path = '/blog/:id' component = {BlogDetail} />
                    <Route exact path = '/login' component = {Login} />
                    <Route exact path = '/signup' component = {Signup} />
                    <Route exact path = '/reset-password' component = {ResetPassword} />
                    <Route exact path = '/password/reset/confirm/:uid/:token' component = {ResetPasswordConfirm} />
                    <Route exact path = '/activate/:uid/:token' component = {Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;