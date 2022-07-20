import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Form } from 'antd';
import './sign-up.scss';
import Enter from '../../components/icons/Enter';

const SignUp = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="sign-up-page">
            <div className="sign-up-page__title">
                <h3>Sign up</h3>
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="sign-up-page__form-items"
            >
                <Form.Item
                    label="LOGIN"
                    name="login"
                    rules={[{ required: true, message: 'Please input your login' }, {
                        pattern: /([a-zA-Z]{3,30}\s*)+/,
                        message: 'Format is wrong',
                    }]}
                >
                    <div className="form-item sign-up-page__form-items_input">
                        <Input placeholder="Login" />
                    </div>
                </Form.Item>

                <Form.Item
                    label="E-MAIL"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email' }, {
                        pattern: /^\S+@\S+\.\S+$/,
                        message: 'Format is wrong',
                    }]}
                >
                    <div className="form-item sign-up-page__form-items_input">
                        <Input placeholder="Email" />
                    </div>
                </Form.Item>
                <Form.Item
                    label="PASSWORD"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                >
                    <div className="form-item sign-up-page__form-items_input">
                        <Input placeholder="Password" />
                    </div>
                </Form.Item>

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
                    <div className="form-item sign-up-page__form-items_input">
                        <Input placeholder="Repeat password" />
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className="sign-up-page__buttons">
                        <div className="sign-up-page__buttons__sign-in">
                            Already have an account?
                            <Link to="/sign-in">Sign in</Link>
                        </div>
                        <div className="sign-up-page__buttons__button">
                            <Button htmlType="submit" type="primary">
                                Sign up
                                <Enter />
                            </Button>
                        </div>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUp;
