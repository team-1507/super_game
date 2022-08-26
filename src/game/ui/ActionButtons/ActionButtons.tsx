import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SquareButton from '../../../components/sections/SquareButton';
import { RootState } from '../../../store';

import { mapHelper } from '../../SpriteSheet';

import './ActionButtons.scss';
import { plow } from '../../store/gardenStateSlice';

const ActionButtons = () => {
    // const gardenState = useSelector((state: RootState) => state.gardenState);
    const currentCharacterPosition = useSelector((state: RootState) => state.characterPosition);

    const dispatch = useDispatch();

    const handleClickPlow = () => {
        const tileNum = mapHelper.coordsToTileNum(currentCharacterPosition.coords);
        dispatch(plow(tileNum));
    };

    return (
        <div className="game-page-action-buttons">
            <SquareButton onClick={handleClickPlow}>
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
