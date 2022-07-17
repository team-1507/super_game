import React from 'react';
import TextInput from '../../components/form/TextInput';
import './SignIn.scss';

const SignIn = () => {
    return (
        <main className="signInPage">
            <section className="centeredForm">
                <h1>Sign In</h1>
                <form action="/" method="post">
                    <TextInput name="login" label="Login" message={{ text: 'Allrighty!', status: 'info' }} />
                    <TextInput name="password" type="password" label="Password" message={{ text: 'Oooopsy!', status: 'error' }} />
                </form>
            </section>
        </main>
    );
};

export default SignIn;
