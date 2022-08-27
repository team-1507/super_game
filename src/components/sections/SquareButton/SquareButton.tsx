import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './SquareButton.scss';

const SquareButton = (props: LinkProps & { to?: string }) => {
    const {
        children, to, className, onClick,
    } = props;
    return (
        <Link to={to} className={`square-button ${className || ''}`} onClick={onClick}>
            {children}
        </Link>
    );
};

SquareButton.defaultProps = {
    to: '',
};

export default SquareButton;
