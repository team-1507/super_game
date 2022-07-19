import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import './sign-up.scss';
import Enter from '../../components/icons/Enter';

const GameOver = () => {
    const inputsFormSignUp = {
        login: '',
        email: '',
        password: '',
        repeatPassword: '',
    };
    return (
        <div className="sign-up-page">
            <div className="sign-up-page__title">
                <h3>Sign up</h3>
            </div>
            <div className="sign-up-page__form-items">
                <div className="sign-up-page__form-items_input">
                    <Input value={inputsFormSignUp.login} status="error" placeholder="Login" />
                </div>
                <div className="sign-up-page__form-items_input">
                    <Input value={inputsFormSignUp.email} status="error" placeholder="Email" />
                </div>
                <div className="sign-up-page__form-items_input">
                    <Input value={inputsFormSignUp.password} status="error" placeholder="Password" />
                </div>
                <div className="sign-up-page__form-items_input">
                    <Input value={inputsFormSignUp.repeatPassword} status="error" placeholder="Repeat password" />
                </div>
            </div>
            <div className="sign-up-page__buttons">
                <div className="sign-up-page__buttons__sign-in">
                    Already have an account?
                    <Link to="/">Sign in</Link>
                </div>
                <div className="sign-up-page__buttons__button">
                    <Link to="/">
                        <Button type="primary">
                            Sign up
                            <Enter />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GameOver;
