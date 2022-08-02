import React, { createRef } from 'react';
import { Form, Input, InputRef } from 'antd';
import { UserinfoFormProps } from '../types';

export const loginInputRef = createRef<InputRef>();
const Login = (props: UserinfoFormProps) => {
    const { key, user } = props;
    return (
        <Form.Item
            key={key}
            label="LOGIN"
            name="login"
            rules={[{ required: true, message: 'Please input your login' }, {
                pattern: /([a-zA-Z]{3,30}\s*)+/,
                message: 'Format is wrong',
            }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input ref={loginInputRef} defaultValue={user?.login} />
            </div>
        </Form.Item>
    );
};

export default Login;
