import React, { HTMLProps } from 'react';
import ArrowBack from '../../icons/ArrowBack';
import SquareButton from '../SquareButton';
import './HeaderBackButton.scss';

type HeaderBackButtonProps = HTMLProps<HTMLElement> & {
    header: string,
};

const HeaderBackButton = (props: HeaderBackButtonProps) => {
    const { header, children } = props;
    return (
        <header className="header-back-button">
            <SquareButton to="/">
                <ArrowBack />
            </SquareButton>
            <h1>{header}</h1>
            { children }
        </header>
    );
};

export default HeaderBackButton;
