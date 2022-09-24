import React, { useContext } from 'react';
import { Form, Radio } from 'antd';

const ThemeTab = () => {
    const changeHandler = ({ theme } : { theme: string }) => {
        window.localStorage.setItem('theme', theme);
    };
    const theme = useContext(ThemeContext);
    return (
        <Form
            initialValues={{ remember: true }}
            autoComplete="off"
            className="theme-form"
            layout="vertical"
            onValuesChange={changeHandler}
        >
            <Form.Item label="Select theme" name="theme">
                <Radio.Group>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="alternative">Alternative</Radio.Button>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};

export default ThemeTab;
