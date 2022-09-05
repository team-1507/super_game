import React from 'react';
import SquareButton from '../../../components/sections/SquareButton';
import { WithControlsProps } from '../../controls/types';
import './ActionButtons.scss';

const ActionButtons = (props: WithControlsProps) => {
    const { gameControls: { doPlow, doPlant } } = props;

    return (
        <div className="game-page-action-buttons">
            <SquareButton onClick={doPlow}>
                1. PLOW
            </SquareButton>
            <SquareButton onClick={doPlant}>
                2. PLANT
            </SquareButton>
            <SquareButton>
                3. WATER
            </SquareButton>
            <SquareButton>
                <br />
                4. HARVEST
                <br />
                (and sell)
            </SquareButton>
        </div>
    );
};

export default ActionButtons;
