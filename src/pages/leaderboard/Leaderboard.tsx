import React from 'react';
import { Link } from 'react-router-dom';
import './Leaderboard.scss';
import { Button, Row, Col } from 'antd';
import ArrowLeft from '../../components/icons/ArrowLeft';
import users from './users';

const Leaderboard = () => {
    const generateCols = users
        .map((item, index) =>
            <Col span={8} key={index} title={item}>
                <span className="leaderboard-page__grid__number">{index + 1}.</span>
                <span className="leaderboard-page__grid__text">{item}</span>
            </Col>);

    return (
        <main className="leaderboard-page">
            <section className="btn-back">
                <Link to="/">
                    <Button type="primary" icon={<ArrowLeft />} />
                </Link>
                <span className="page-title">Leaderboard</span>
            </section>
            <section className="leaderboard-page__grid">
                <Row gutter={[8, 2]}>
                    {generateCols}
                </Row>
            </section>
        </main>
    );
};

export default Leaderboard;
