import React from 'react';
import { Link } from 'react-router-dom';
import UserinfoForm from '../../components/form/UserinfoForm';
import './SignIn.scss';

const SignIn = () => (
    <div className="sign-up-page">
        <div className="sign-up-page__wrapper">
            <div className="sign-up-page__title">
                <h3>Sign in</h3>
            </div>
            <UserinfoForm formInputs={['login', 'password', 'submit']} submitTitle="Sign in">
                <div className="sign-up-page__buttons__sign-in">
                    Don`t have an account?&nbsp;
                    <Link to="/sign-up">Sign up</Link>
                </div>
            </UserinfoForm>
        </div>
    </div>
);

export default SignIn;
