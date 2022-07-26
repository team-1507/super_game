import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.scss';
import UserinfoForm from '../../components/form/UserinfoForm';

const SignUp = () => {
    return (
        <div className="sign-up-page">
            <div className="sign-up-page__wrapper">
                <div className="sign-up-page__title">
                    <h3>Sign up</h3>
                </div>
                <UserinfoForm formInputs={['login', 'email', 'password', 'confirmPassword', 'submit']} submitTitle="Sign up">
                    <div className="sign-up-page__buttons__sign-in">
                        Already have an account?&nbsp;
                        <Link to="/sign-in">Sign in</Link>
                    </div>
                </UserinfoForm>
            </div>
        </div>
    );
};

export default SignUp;
