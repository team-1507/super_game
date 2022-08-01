import React, { createRef, HTMLProps, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button, Input, Form, InputRef,
} from 'antd';
import EnterKey from '../../icons/EnterKey';
import { setUser, IUserState, initialState } from '../../../store/reducers';
import { useAppDispatch } from '../../../store/hooks';
import './UserinfoForm.scss';
import { SignUpData, SignUpDataDto } from '../../../api/sign-up/types';
import { SignInData, SignInDataDto } from '../../../api/sign-in/types';

type CallbackFnData = SignUpData | SignInData | Record<string, never>;
type CallbackFnReturn = SignUpDataDto | SignInDataDto | null;

type UserinfoFormProps = HTMLProps<HTMLElement> & {
    formInputs: (keyof typeof inputs)[],
    submitTitle: string,
    callbackFn?(this: void, body: CallbackFnData): Promise<CallbackFnReturn>,
    valuesToSend: CallbackFnData,
    navigateOnSuccess?: string,
    user?: IUserState,
};

const loginInput = createRef<InputRef>();
const inputs = {
    login: (props: UserinfoFormProps) => (
        <Form.Item
            key={props.key}
            label="LOGIN"
            name="login"
            rules={[{ required: true, message: 'Please input your login' }, {
                pattern: /([a-zA-Z]{3,30}\s*)+/,
                message: 'Format is wrong',
            }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input ref={loginInput} value={props.user?.login} />
            </div>
        </Form.Item>
    ),
    email: (props: UserinfoFormProps) => (
        <Form.Item
            key={props.key}
            label="E-MAIL"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }, {
                type: 'email',
                message: 'Format is wrong',
            }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input value={props.user?.email} />
            </div>
        </Form.Item>
    ),
    password: (props: UserinfoFormProps) => (
        <Form.Item
            key={props.key}
            label="PASSWORD"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input />
            </div>
        </Form.Item>
    ),
    confirmPassword: (props: UserinfoFormProps) => (
        <Form.Item
            key={props.key}
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
        const { children, submitTitle, key } = props;
        return (
            <Form.Item key={key}>
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
    const {
        formInputs, children, submitTitle, callbackFn, valuesToSend, navigateOnSuccess, user,
    } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onFinish = (values: CallbackFnData) => {
        if (!callbackFn) {
            return;
        }
        const callBackFnData = { ...valuesToSend };
        Object.keys(valuesToSend).forEach((key) => {
            const fieldName = key as keyof CallbackFnData;
            callBackFnData[fieldName] = values[fieldName];
        });
        callbackFn(callBackFnData).then((response) => {
            if (response) {
                dispatch(setUser(callBackFnData));
                if (navigateOnSuccess) {
                    navigate(navigateOnSuccess);
                }
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
            {formInputs.map(
                (input) => (inputs[input]({
                    ...props, submitTitle, children, key: input, user,
                })),
            )}
        </Form>
    );
};

UserinfoForm.defaultProps = {
    navigateOnSuccess: undefined,
    callbackFn: undefined,
    user: initialState,
};

export default UserinfoForm;
