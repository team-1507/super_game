import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';
import ArrowTopRight from '../../components/icons/ArrowTopRight';
import UserApi from '../../api/sign-in/sign-in';
import audio from '../../audio';
import titleMusic from '../../../static/audio/music/title.ogg';
import './home-page.scss';

const music = audio({ src: titleMusic, loop: true, volume: 0.3 });
const playMusic = () => {
    music.play().catch((e) => {
        notification.open({
            message: 'Error playing music',
            description: String(e),
        });
    });
    document.removeEventListener('click', playMusic);
};

if (typeof window !== 'undefined') {
    document.addEventListener('click', playMusic);
}

const HomePage = () => {
    const navigate = useNavigate();
    const logOut = () => {
        UserApi.logOut().then((response) => {
            if (response) {
                navigate('/sign-in');
            }
        }).catch((err) => {
            notification.open({
                message: 'Error logging out',
                description: String(err),
            });
        });
    };

    return (
        <div className="home-page">
            <div className="home-page__info">
                <div className="home-page__info__header">
                    <h1>
                        Ivan&#x27;s
                        <br />
                        Dacha
                    </h1>
                </div>
                <div className="home-page__info__about">
                    <p>
                        Controls:
                    </p>
                    <p>
                        <strong>W, A, S, D </strong>
                        – move the character
                        <br />
                        <strong>1, 2, 3, 4 </strong>
                        – Plow, plant selected crop,
                        water the earth, harvest and sell the gather
                        <br />
                        <strong>TAB </strong>
                        – cycle through the seeds
                        <br />
                        <strong>B </strong>
                        – buy more of selected seeds
                        <br />
                        <strong>F </strong>
                        – enter fullscreen
                        <br />
                        <strong>M </strong>
                        – mute
                        <br />
                        <strong>ESC </strong>
                        – pause menu
                    </p>
                </div>
            </div>
            <div className="home-page__subtitle">
                <p>Welcome to Ivan&#x27;s dacha</p>
            </div>
            <div className="home-page__buttons-group">
                <div className="home-page__buttons-group__one-button">
                    <Link to="/game">
                        <Button type="primary">START</Button>
                    </Link>
                </div>
                <div className="home-page__buttons-group__two-button">
                    <div className="home-page__buttons-group__two-button__btn">
                        <Link to="/leaderboard">
                            <Button type="primary">
                                LEADERBOARD
                                <ArrowTopRight />
                            </Button>
                        </Link>
                    </div>
                    <div className="home-page__buttons-group__two-button__btn">
                        <Link to="/forum">
                            <Button type="primary">
                                FORUM
                                <ArrowTopRight />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="home-page__buttons-group__two-button">
                    <div className="home-page__buttons-group__two-button__btn">
                        <Link to="/settings">
                            <Button type="primary">
                                SETTINGS
                                <ArrowTopRight />
                            </Button>
                        </Link>
                    </div>
                    <div className="home-page__buttons-group__two-button__btn">
                        <Button type="primary" onClick={logOut}>
                            LOG OUT
                            <ArrowTopRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
