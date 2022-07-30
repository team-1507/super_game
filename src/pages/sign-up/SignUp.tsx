import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.scss';
import UserinfoForm from '../../components/form/UserinfoForm';
import SignUpApi from '../../api/sign-up/sign-up';
import { SignUpData } from '../../api/sign-up/types';

const SignUp = () => {
    const callbackFn = SignUpApi.signUp;
    const valuesToSend:SignUpData = {
        first_name: 'Иван',
        second_name: 'Дачный',
        phone: '89999999999',
        login: '',
        email: '',
        password: '',
    };
    return (
        <div className="sign-up-page">
            <div className="sign-up-page__wrapper">
                <div className="sign-up-page__title">
                    <h3>Sign up</h3>
                </div>
                <UserinfoForm
                    formInputs={['login', 'email', 'password', 'confirmPassword', 'submit']}
                    submitTitle="Sign up"
                    callbackFn={callbackFn}
                    valuesToSend={valuesToSend}
                    navigateOnSuccess="/"
                >
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
