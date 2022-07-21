import React, {
    createRef, useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../../components/form/FormButton';
import TextInput from '../../components/form/TextInput';
import EnterKey from '../../components/icons/EnterKey';
import './SignIn.scss';

const SignIn = () => {
    const loginInput = createRef<HTMLInputElement>();
    useEffect(() => {
        loginInput.current?.focus();
    }, [loginInput]);
    return (
        <main className="sign-in-page">
            <section className="centeredForm">
                <h1>Sign in</h1>
                <form action="/" method="post">
                    <TextInput name="login" ref={loginInput} label="Login" message={{ text: 'Allrighty!', status: 'info' }} />
                    <TextInput name="password" type="password" label="Password" message={{ text: 'Oooopsy!', status: 'error' }} />
                    <div className="submit-button-wrapper">
                        <FormButton type="submit">
                            Sign in
                            <EnterKey />
                        </FormButton>
                        <span className="form-caption">
                            Don`t have an account?
                            {' '}
                            <Link to="/sign-up">Sign up</Link>
                        </span>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
