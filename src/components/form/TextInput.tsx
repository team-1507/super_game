import React, { InputHTMLAttributes, PureComponent } from 'react';
import './TextInput.scss';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    id?: string,
    type?: 'text' | 'password',
    message?: {
        text?: string,
        status?: 'error' | 'info',
    }
};

class TextInput extends PureComponent<TextInputProps> {
    static defaultProps = {
        label: '',
        id: `input-${Math.floor(Math.random() * 10000)}`,
        type: 'text',
        message: undefined,
    };

    render() {
        const {
            id, value, label, placeholder, className, type, name, message,
        } = this.props;

        return (
            <>
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={`text-input ${className || ''}`}
                />
                <label htmlFor={id}>{label}</label>
                <span className={`text-input-status ${message?.status || ''}`}>
                    {message?.text}
                </span>
            </>
        );
    }
}

export default TextInput;
