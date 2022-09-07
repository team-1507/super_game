import React from 'react';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import UserinfoForm from '../../components/form/UserinfoForm';
import { SignInData } from '../../api/sign-in/types';
import SignInApi from '../../api/sign-in/sign-in';
import OAuthApi from '../../api/oauth/oauth';
import './SignIn.scss';
import YandexIcon from '../../components/icons/YandexIcon';

const SignIn = () => {
    const callbackFn = SignInApi.signIn;
    const valuesToSend:SignInData = {
        login: '',
        password: '',
    };
    const REDIRECT_URI = 'https://ivans-dacha.herokuapp.com';
    const getClientId = () => {
        OAuthApi.getServiceId(REDIRECT_URI).then((response) => {
            if (response) {
                console.log(response.service_id);
                const urlToAuth = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${REDIRECT_URI}`;
                window.open(urlToAuth, '_blank');
            }
        })
            .catch((err) => {
                notification.open({
                    message: 'Error logging out',
                    description: String(err),
                });
            });
    };
    return (
        <div className="sign-in-page">
            <div className="sign-in-page__wrapper">
                <div className="sign-in-page__title">
                    <h3>Sign in</h3>
                </div>
                <UserinfoForm
                    formInputs={['login', 'password', 'submit']}
                    submitTitle="Sign in"
                    callbackFn={callbackFn}
                    valuesToSend={valuesToSend}
                    navigateOnSuccess="/"
                >
                    <div className="sign-in-page__buttons__sign-in">
                        Don`t have an account?&nbsp;
                        <Link to="/sign-up">Sign up</Link>
                    </div>
                </UserinfoForm>
                <div className="sign-in-page__yandex-auth">
                    <button onClick={getClientId}>Authorization via Yandex</button>
                    <YandexIcon />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
