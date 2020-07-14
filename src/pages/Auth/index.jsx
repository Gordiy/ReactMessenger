import React from 'react';
import { Route } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../../modules';

import './Auth.scss';

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                {/* create route from Login form to register form */}
                <Route exact path={["/", "/login"]} component={LoginForm} /> {/* If opened basic path or login path */}
                {/* <LoginForm /> */}
                <Route exact path="/register" component={RegisterForm} />
            </div>
        </section>
    )
}

export default Auth;
