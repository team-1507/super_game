import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../../icons/ArrowBack';
import './HeaderBackButton.scss';

const HeaderBackButton = () => (
    <header className="header-back-button">
        <Link to="/" className="back-button">
            <ArrowBack />
        </Link>
        <h1>Settings</h1>
    </header>
);

export default HeaderBackButton;
