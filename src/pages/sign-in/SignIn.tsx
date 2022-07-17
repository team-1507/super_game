import React, { createRef, HTMLProps, PureComponent, RefObject } from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../../components/form/FormButton';
import TextInput from '../../components/form/TextInput';
import EnterKey from '../../components/icons/EnterKey';
import './SignIn.scss';

type SignInProps = HTMLProps<HTMLElement>;

class SignIn extends PureComponent {
    private loginInput: RefObject<HTMLInputElement>;

    constructor(props: SignInProps) {
        super(props);
        this.loginInput = createRef<HTMLInputElement>();
    }

    componentDidMount(){
        this.loginInput.current?.focus();
    }

    render() {
        return (
            <main className="signInPage">
                <section className="centeredForm">
                    <h1>Sign in</h1>
                    <form action="/" method="post">
                        <TextInput name="login" ref={this.loginInput} label="Login" message={{ text: 'Allrighty!', status: 'info' }} />
                        <TextInput name="password" type="password" label="Password" message={{ text: 'Oooopsy!', status: 'error' }} />
                        <div className="submit-button-wrapper">
                            <FormButton type="submit">
                                Sign in
                                <EnterKey />
                            </FormButton>
                            <span className="form-caption">
                                Don't have an account? <Link to="/sign-up">Sign up</Link>
                            </span>
                        </div>
                    </form>
                </section>
            </main>
        );
    }
};

export default SignIn;
