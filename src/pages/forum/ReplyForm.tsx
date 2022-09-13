import React from 'react';
import { Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import ArrowSend from '../../components/icons/ArrowSend';

export const ReplyForm = () => (
    <div className="reply-form-wrapper">
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className="reply-form"
        >
            {/* почему-то съедает одно двоеточие, с двумя работает */}
            <Form.Item label="Reply::">
                <TextArea rows={3} />
            </Form.Item>
            <Form.Item className="reply-form-send-button">
                <Button htmlType="submit" type="primary">
                    <ArrowSend />
                </Button>
            </Form.Item>
        </Form>
    </div>
);

export default ReplyForm;
