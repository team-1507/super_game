import { Button } from 'antd';
import React from 'react';
import ArrowBack from '../../../components/icons/ArrowBack';

import './PauseMenu.scss';

const PauseMenu = () => (
    <div className="game-page-pause-menu-wrapper">
        <Button>RESUME</Button>
        <Button>
            <ArrowBack />
            MAIN PAGE
        </Button>
    </div>
);

export default PauseMenu;
