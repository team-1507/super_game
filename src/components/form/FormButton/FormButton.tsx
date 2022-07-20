import React, { HTMLProps } from 'react';
import './FormButton.scss';

type FormButtonProps = HTMLProps<HTMLButtonElement> & {
    type: 'button' | 'submit' | 'reset',
};

const FormButton = (props:FormButtonProps) => {
    const {
        type, children, name, id, className, onClick,
    } = props;
    return (
        <button
            type={type}
            name={name}
            id={id}
            className={`form-button ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default FormButton;
