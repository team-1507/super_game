import React from 'react';
import { Link } from 'react-router-dom';
import './home-page.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Ferma!</h1>
            <Link to="/sign-up">go to registration</Link>
        </div>
    );
};

export default HomePage;
