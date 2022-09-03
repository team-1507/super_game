import { Button } from 'antd';
import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../../utils';
import ArrowBack from '../../../components/icons/ArrowBack';
import ArrowTopRight from '../../../components/icons/ArrowTopRight';

import './PauseMenu.scss';

type PauseMenuProps = {
    wrapperRef: RefObject<HTMLDivElement>,
    toggleFn: () => void,
    active: boolean,
};

const PauseMenu = (props: PauseMenuProps) => {
    const { wrapperRef, toggleFn, active } = props;
    const classes = classNames(['game-page-pause-menu-wrapper', { active }]);

    return (
        <div className={classes} ref={wrapperRef}>
            <h1>PAUSE</h1>
            <Button type="primary" onClick={toggleFn}>
                RESUME
                <ArrowTopRight />
            </Button>
            <Link to="/" onClick={toggleFn}>
                <Button type="primary">
                    <ArrowBack />
                    MAIN PAGE
                </Button>
            </Link>
        </div>
    );
};

export default PauseMenu;
