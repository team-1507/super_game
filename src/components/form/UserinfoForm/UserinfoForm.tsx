import React, { createRef, HTMLProps, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, Input, Form, InputRef,
} from 'antd';
import SignUpApi from '../../../api/sign-up/sign-up';
import { SignUpData } from '../../../api/sign-up/types';
import EnterKey from '../../icons/EnterKey';
import './UserinfoForm.scss';

type UserinfoFormProps = HTMLProps<HTMLElement> & {
    formInputs: (keyof typeof inputs)[],
    submitTitle: string,
};

const loginInput = createRef<InputRef>();
const inputs = {
    login: () => (
        <Form.Item
            label="LOGIN"
            name="login"
            rules={[{ required: true, message: 'Please input your login' }, {
                pattern: /([a-zA-Z]{3,30}\s*)+/,
                message: 'Format is wrong',
            }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input ref={loginInput} />
            </div>
        </Form.Item>
    ),
    email: () => (
        <Form.Item
            label="E-MAIL"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }, {
                type: 'email',
                message: 'Format is wrong',
            }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input />
            </div>
        </Form.Item>
    ),
    password: () => (
        <Form.Item
            label="PASSWORD"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input />
            </div>
        </Form.Item>
    ),
    confirmPassword: () => (
        <Form.Item
            label="PASSWORD (one more time)"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
                {
                    required: true,
                    message: 'Please confirm your password',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('passwords do not match'));
                    },
                }),
            ]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input />
            </div>
        </Form.Item>
    ),
    submit: (props: UserinfoFormProps) => {
        const { children, submitTitle } = props;
        return (
            <Form.Item>
                <div className="userinfo__buttons">
                    {children}
                    <div className="userinfo__buttons__button">
                        <Button htmlType="submit" type="primary">
                            {submitTitle}
                            <EnterKey />
                        </Button>
                    </div>
                </div>
            </Form.Item>
        );
    },
};

const UserinfoForm = (props: UserinfoFormProps) => {
    const { formInputs, children, submitTitle } = props;
    const navigate = useNavigate();
    const onFinish = (values: SignUpData) => {
        const signUpData:SignUpData = {
            first_name: 'Иван',
            second_name: 'Дачный',
            login: values.login,
            email: values.email,
            password: values.password,
            phone: '89999999999',
        };
        SignUpApi.signUp(signUpData).then((response) => {
            if (response) {
                navigate('/');
            }
        })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };

    useEffect(() => {
        loginInput.current?.focus();
    }, []);
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className="userinfo__form-items userinfo"
        >
            {formInputs.map((input) => (inputs[input]({ ...props, submitTitle, children })))}
        </Form>
    );
};

export default UserinfoForm;
