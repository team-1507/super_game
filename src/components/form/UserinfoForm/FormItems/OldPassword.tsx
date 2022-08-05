import React from 'react';
import { Form, Input } from 'antd';
import { UserinfoFormProps } from '../types';

const Password = (props: UserinfoFormProps) => {
    const { key } = props;
    return (
        <Form.Item
            key={key}
            label="OLD PASSWORD"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input type="password" />
            </div>
        </Form.Item>
    );
};

export default Password;
