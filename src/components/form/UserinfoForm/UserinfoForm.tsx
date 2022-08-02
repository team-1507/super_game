import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { setUser, initialState } from '../../../store/reducers';
import { useAppDispatch } from '../../../store/hooks';
import './UserinfoForm.scss';
import { CallbackFnData, UserinfoFormProps } from './types';
import {
    Login, loginInputRef, Email, Password, ConfirmPassword, Submit,
} from './FormItems';

const inputs:Record<string, FC<UserinfoFormProps>> = {
    login: Login,
    email: Email,
    password: Password,
    confirmPassword: ConfirmPassword,
    submit: Submit,
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
        loginInputRef.current?.focus();
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
