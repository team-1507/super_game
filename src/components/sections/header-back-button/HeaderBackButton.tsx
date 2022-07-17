import React from 'react';
import ArrowBack from '../../icons/ArrowBack';
import './HeaderBackButton.scss';

const HeaderBackButton = () => (
    <header className="header-back-button">
        <button type="button">
            <ArrowBack />
        </button>
        <h1>Settings</h1>
    </header>
);

export default HeaderBackButton;
