import { Button } from 'antd';
import React, { HTMLProps } from 'react';
import './UploadInput.scss';

type UploadInputProps = HTMLProps<HTMLInputElement> & {
    label?: string,
    id?: string
};

const UploadInput = React.forwardRef<HTMLInputElement, UploadInputProps>((props, ref) => {
    const {
        id, label, className, name,
    } = props;

    const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.currentTarget.parentElement?.click();
    };

    return (
        <label htmlFor={id} data-title={label} className={`upload-input ${className || ''}`}>
            <input type="file" id={id} name={name} ref={ref} />
            <Button htmlType="button" type="primary" onClick={onClickHandler}>
                Upload
            </Button>
        </label>
    );
});

UploadInput.defaultProps = {
    label: '',
    id: `upload-input-${Math.floor(Math.random() * 10000)}`,
};

export default UploadInput;
