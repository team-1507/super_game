import { Button } from 'antd';
import React, { RefObject } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { togglePause, toggleMute } from '../../../game/store/uiSlice';
import { Link } from 'react-router-dom';
import { classNames } from '../../../utils';
import ArrowBack from '../../../components/icons/ArrowBack';
import ArrowTopRight from '../../../components/icons/ArrowTopRight';
import VolumeOn from '../../../components/icons/VolumeOn';
import VolumeOff from '../../../components/icons/VolumeOff';

import './PauseMenu.scss';

type PauseMenuProps = {
    wrapperRef: RefObject<HTMLDivElement>,
};

const PauseMenu = (props: PauseMenuProps) => {
    const { wrapperRef } = props;
    const { pauseMenu: isPause, mute } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    const togglePauseFn = () => dispatch(togglePause());
    const toggleMuteFn = () => dispatch(toggleMute());
    const classes = classNames(['game-page-pause-menu-wrapper', { active: isPause }]);
    const linkStyles = { margin: 0 };

    return (
        <div className={classes} ref={wrapperRef}>
            <h1>PAUSE</h1>
            <Button type="primary" onClick={togglePauseFn}>
                RESUME
                <ArrowTopRight />
            </Button>
            <Link to="/" onClick={togglePauseFn}>
                <Button type="primary" style={linkStyles}>
                    <ArrowBack />
                    MAIN PAGE
                </Button>
            </Link>
            <Button type="primary" onClick={toggleMuteFn}>
                MUTE
                {
                    mute
                        ? (<VolumeOff />)
                        : (<VolumeOn />)
                }
            </Button>
        </div>
    );
};

export default PauseMenu;
