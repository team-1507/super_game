import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.scss';
import { notification } from 'antd';
import UserinfoForm from '../../components/form/UserinfoForm';
import SignUpApi from '../../api/sign-up/sign-up';
import { SignUpData } from '../../api/sign-up/types';
import YandexIcon from '../../components/icons/YandexIcon';
import OAuthApi from '../../api/oauth/oauth';
import IS_DEV from '../../consts';

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
    const REDIRECT_URI = IS_DEV ? 'http://localhost:3000' : 'https://ivans-dacha.herokuapp.com';
    const getClientId = () => {
        OAuthApi.getServiceId(REDIRECT_URI).then((response) => {
            if (response) {
                const urlToAuth = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${REDIRECT_URI}`;
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
                <div className="sign-up-page__yandex-auth">
                    <button onClick={getClientId}>Authorization via Yandex</button>
                    <YandexIcon />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
