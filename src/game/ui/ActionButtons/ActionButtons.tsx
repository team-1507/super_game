import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SquareButton from '../../../components/sections/SquareButton';
import { RootState } from '../../../store';

import { SpriteSheet } from '../../SpriteSheet';
import * as config from '../../plants/config';
import * as constants from '../../constants';
import * as mapConfig from '../../map/config';

import './ActionButtons.scss';
import { plow } from '../../store/gardenStateSlice';

const ActionButtons = () => {
    // const gardenState = useSelector((state: RootState) => state.gardenState);
    const currentCharacterPosition = useSelector((state: RootState) => state.characterPosition);

    const dispatch = useDispatch();
    const spriteSheet = new SpriteSheet({
        ...config,
        ...constants,
        BOUNDARIES: mapConfig.BOUNDARIES,
    });

    const handleClickPlow = () => {
        const tileNum = spriteSheet.coordsToTileNum(currentCharacterPosition.coords);
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
