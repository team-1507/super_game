import React, { HTMLProps } from 'react';
import './FormButton.scss';

type FormButtonProps = HTMLProps<HTMLButtonElement> & {
    type: 'button' | 'submit' | 'reset',
};

const FormButton = (props:FormButtonProps) => {
    const {
        type, children, name, id, className,
    } = props;
    return (
        <button
            type={type}
            name={name}
            id={id}
            className={`form-button ${className || ''}`}
        >
            {children}
        </button>
    );
};

export default FormButton;
