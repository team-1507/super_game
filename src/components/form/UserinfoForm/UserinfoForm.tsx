import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { setUser, initialState } from '../../../store/reducers/userReducer';
import { UserDto } from '../../../api/user/types';
import { useAppDispatch } from '../../../store/hooks';
import './UserinfoForm.scss';
import { CallbackFnData, CallbackFnReturn, UserinfoFormProps } from './types';
import {
    Login, loginInputRef, Email, Password, ConfirmPassword, Submit, OldPassword,
} from './FormItems';
import NewPassword from './FormItems/NewPassword';

const inputs:Record<string, FC<UserinfoFormProps>> = {
    login: Login,
    email: Email,
    password: Password,
    oldPassword: OldPassword,
    newPassword: NewPassword,
    confirmPassword: ConfirmPassword,
    submit: Submit,
};

const UserinfoForm = (props: UserinfoFormProps) => {
    const {
        formInputs, children, submitTitle, callbackFn, valuesToSend, navigateOnSuccess, user,
    } = props;
    const login = user?.login;
    const isSign = submitTitle.includes('Sign');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onFinish = (values: CallbackFnData) => {
        if (!callbackFn) {
            return;
        }
        const callBackFnData = { ...valuesToSend };
        Object.keys(valuesToSend).forEach((key) => {
            const fieldName = key as keyof CallbackFnData;
            callBackFnData[fieldName] = values[fieldName] ?? valuesToSend[fieldName];
        });
        callbackFn(callBackFnData).then((response: CallbackFnReturn) => {
            if (response) {
                dispatch(setUser(response as UserDto));
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

    return isSign || formInputs.includes('newPassword') || login ? (
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
    ) : null;
};

UserinfoForm.defaultProps = {
    navigateOnSuccess: undefined,
    callbackFn: undefined,
    user: initialState.data,
};

export default UserinfoForm;
