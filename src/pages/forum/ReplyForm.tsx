import React, { RefObject } from 'react';
import { Button, Form, FormInstance } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import ArrowSend from '../../components/icons/ArrowSend';

export const ReplyForm = (props: {
    replyCallback: (values: { text: string }) => void,
    formRef: RefObject<FormInstance>,
}) => {
    const { replyCallback, formRef } = props;
    return (
        <div className="reply-form-wrapper">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                className="reply-form"
                onFinish={replyCallback}
                ref={formRef}
            >
                {/* почему-то съедает одно двоеточие, с двумя работает */}
                <Form.Item
                    label="Reply::"
                    rules={[{ required: true, message: '' }]}
                    name="text"
                >
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
};

export default ReplyForm;
