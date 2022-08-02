import React from 'react';
import { Form, Input } from 'antd';
import { UserinfoFormProps } from '../types';

const Email = (props: UserinfoFormProps) => {
    const { key, user } = props;
    return (
        <Form.Item
            key={key}
            label="E-MAIL"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }, {
                type: 'email',
                message: 'Format is wrong',
            }]}
        >
            <div className="form-item userinfo__form-items_input">
                <Input defaultValue={user?.email} />
            </div>
        </Form.Item>
    );
};

export default Email;
