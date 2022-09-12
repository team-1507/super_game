import React from 'react';
import SquareButton from '../../../components/sections/SquareButton';
import { WithControlsProps } from '../../controls/types';
import './ActionButtons.scss';

const ActionButtons = (props: WithControlsProps) => {
    const {
        gameControls: {
            doPlow, doPlant, doWater, doHarvest,
        },
    } = props;

    const clickHadnler = (fn: () => void) => (e: React.MouseEvent) => {
        e.preventDefault();
        fn();
    };

    return (
        <div className="game-page-action-buttons">
            <SquareButton onClick={clickHadnler(doPlow)}>
                1. PLOW
            </SquareButton>
            <SquareButton onClick={clickHadnler(doPlant)}>
                2. PLANT
            </SquareButton>
            <SquareButton onClick={clickHadnler(doWater)}>
                3. WATER
            </SquareButton>
            <SquareButton onClick={clickHadnler(doHarvest)}>
                <br />
                4. HARVEST
                <br />
                (and sell)
            </SquareButton>
        </div>
    );
};

export default ActionButtons;
