/* eslint-disable react/jsx-props-no-spreading */
import React, { RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import audio from '../../audio';
import { RootState } from '../../store';
import constants from '../constants';
import Tomato from '../plants/Tomato';
import { mapHelper } from '../SpriteSheet';
import {
    down, left, right, up,
} from '../store/characterPositionSlice';
import { plant } from '../store/gardenStateSlice';
import { selectNext } from '../store/inventorySlice';
import { plow } from '../store/mapStateSlice';
import { addAction, addMove } from '../store/timerSlice';
import { togglePause } from '../store/uiSlice';
import { WithControlsProps } from './types';

const withControls = <T extends WithControlsProps = WithControlsProps>(
    WrappedComponent: React.ComponentType<T>,
    refs: Record<string, RefObject<HTMLCanvasElement>>,
) => (
    props: Omit<T, keyof WithControlsProps>,
) => {
    const { gardenRef } = refs;

    const currentCharacterPosition = useSelector((state: RootState) => state.characterPosition);

    const dispatch = useDispatch();

    const getCurrentCharacterTileNum = () => mapHelper.coordsToTileNum(
        currentCharacterPosition.coords,
    );

    const gameControls = {
        goUp: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(addMove());
            dispatch(up());
        },
        goDown: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(addMove());
            dispatch(down());
        },
        goLeft: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(addMove());
            dispatch(left());
        },
        goRight: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(addMove());
            dispatch(right());
        },
        doPlow: () => {
            dispatch(addAction());
            dispatch(
                plow(getCurrentCharacterTileNum()),
            );
        },
        doPlant: () => {
            dispatch(addAction());
            dispatch(
                plant({
                    plant: new Tomato(gardenRef.current),
                    tileNum: getCurrentCharacterTileNum(),
                }),
            );
        },
        togglePause: () => {
            dispatch(togglePause());
        },
        loopThroughSeeds: () => {
            dispatch(selectNext());
        },
    };

    return (
        <WrappedComponent {...props as T} gameControls={gameControls} />
    );
};

export default withControls;
