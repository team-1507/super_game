import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home-page.scss';
import { Button, notification } from 'antd';
import ArrowTopRight from '../../components/icons/ArrowTopRight';
import UserApi from '../../api/sign-in/sign-in';
import audio from '../../audio';
import titleMusic from '../../../static/audio/music/title.ogg';

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
                        Ivan&apos;s
                        <br />
                        Dacha
                    </h1>
                </div>
                <div className="home-page__info__about">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt.
                    </p>
                </div>
                <div className="home-page__info__about">
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                        ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur?
                    </p>
                </div>
            </div>
            <div className="home-page__subtitle">
                <p>Welcome to Ivan’s dacha</p>
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
