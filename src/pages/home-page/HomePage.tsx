import React from 'react';
import { Link } from 'react-router-dom';
import './home-page.scss';
import { Button } from 'antd';
import ArrowTopRight from '../../components/icons/ArrowTopRight';

const HomePage = () => {
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
                    <Button type="primary">START</Button>
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
                        <Button type="primary">
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
