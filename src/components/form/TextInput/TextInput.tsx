import React, { HTMLProps } from 'react';
import './TextInput.scss';

type TextInputProps = HTMLProps<HTMLInputElement> & {
    label?: string,
    id?: string,
    type?: 'text' | 'password',
    message?: {
        text?: string,
        status?: 'error' | 'info',
    },
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    const {
        id, value, label, placeholder, className, type, name, message,
    } = props;

    return (
        <>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                className={`text-input ${className || ''}`}
                ref={ref}
            />
            <label htmlFor={id}>{label}</label>
            <span className={`text-input-status ${message?.status || ''}`}>
                {message?.text}
            </span>
        </>
    );
});

TextInput.defaultProps = {
    label: '',
    id: `input-${Math.floor(Math.random() * 10000)}`,
    type: 'text',
    message: undefined,
};

export default TextInput;
