import React from 'react';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import UserinfoForm from '../../components/form/UserinfoForm';
import { SignInData } from '../../api/sign-in/types';
import SignInApi from '../../api/sign-in/sign-in';
import OAuthApi from '../../api/oauth/oauth';
import './SignIn.scss';
import YandexIcon from '../../components/icons/YandexIcon';
import Consts from '../../consts';

const SignIn = () => {
    const callbackFn = SignInApi.signIn;
    const valuesToSend:SignInData = {
        login: '',
        password: '',
    };

    const getClientId = () => {
        OAuthApi.getServiceId(Consts.REDIRECT_URI).then((response) => {
            if (response) {
                const urlToAuth = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${Consts.REDIRECT_URI}`;
                window.open(urlToAuth, '_self');
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
