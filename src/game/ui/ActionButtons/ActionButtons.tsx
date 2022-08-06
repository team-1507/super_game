import React from 'react';
import SquareButton from '../../../components/sections/SquareButton';

import './ActionButtons.scss';

const ActionButtons = () => {
    return (
        <div className="game-page-action-buttons">
            <SquareButton>
                1. PLOW
            </SquareButton>
            <SquareButton>
                2. PLANT
            </SquareButton>
            <SquareButton>
                3. WATER
            </SquareButton>
            <SquareButton>
                4. HARVEST
            </SquareButton>
        </div>
    );
};

export default ActionButtons;
