import React from 'react';
import { Form, Input } from 'antd';
import { UserinfoFormProps } from '../types';

const ConfirmPassword = (props: UserinfoFormProps) => {
    const { key } = props;
    return (
        <Form.Item
            key={key}
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
                <Input type="password" />
            </div>
        </Form.Item>
    );
};

export default ConfirmPassword;
