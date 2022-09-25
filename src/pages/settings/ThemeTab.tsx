import React from 'react';
import { Form, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { setTheme } from 'src/store/reducers/themeReducer';
import { useAppSelector } from 'src/store/hooks';

const ThemeTab = () => {
    const dispatch = useDispatch();
    const changeHandler = ({ theme } : { theme: string }) => {
        dispatch(setTheme({ theme }));
    };
    const { theme } = useAppSelector((state) => state.theme);
    return (
        <Form
            initialValues={{ remember: true }}
            autoComplete="off"
            className="theme-form"
            layout="vertical"
            onValuesChange={changeHandler}
        >
            <Form.Item name="theme">
                <Radio.Group
                    defaultValue={theme}
                    buttonStyle="solid"
                >
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="alternative">Alternative</Radio.Button>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};

export default ThemeTab;
