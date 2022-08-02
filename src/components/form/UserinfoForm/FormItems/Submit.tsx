import React from 'react';
import { Button, Form } from 'antd';
import { UserinfoFormProps } from '../types';
import EnterKey from '../../../icons/EnterKey';

const Submit = (props: UserinfoFormProps) => {
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
};

export default Submit;
