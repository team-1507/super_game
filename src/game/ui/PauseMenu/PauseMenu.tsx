import { Button } from 'antd';
import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../../../components/icons/ArrowBack';
import ArrowTopRight from '../../../components/icons/ArrowTopRight';

import './PauseMenu.scss';

type PauseMenuProps = {
    wrapperRef: RefObject<HTMLDivElement>,
    toggleFn: () => void,
};

const PauseMenu = (props: PauseMenuProps) => {
    const { wrapperRef, toggleFn } = props;
    return (
        <div className="game-page-pause-menu-wrapper" ref={wrapperRef}>
            <h1>PAUSE</h1>
            <Button type="primary" onClick={toggleFn}>
                RESUME
                <ArrowTopRight />
            </Button>
            <Link to="/">
                <Button type="primary">
                    <ArrowBack />
                    MAIN PAGE
                </Button>
            </Link>
        </div>
    );
};

export default PauseMenu;
