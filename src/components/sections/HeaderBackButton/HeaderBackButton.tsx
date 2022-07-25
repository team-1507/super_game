import React, { HTMLProps } from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../../icons/ArrowBack';
import './HeaderBackButton.scss';

type HeaderBackButtonProps = HTMLProps<HTMLElement> & {
    header: string,
};

const HeaderBackButton = (props: HeaderBackButtonProps) => {
    const { header } = props;
    return (
        <header className="header-back-button">
            <Link to="/" className="back-button">
                <ArrowBack />
            </Link>
            <h1>{header}</h1>
        </header>
    );
};

export default HeaderBackButton;
