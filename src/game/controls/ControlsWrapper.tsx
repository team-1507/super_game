import { PayloadAction } from '@reduxjs/toolkit';
import React, { HTMLProps, KeyboardEvent, RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { mapHelper } from '../SpriteSheet';
import {
    up, down, left, right,
} from '../store/characterPositionSlice';
import * as constants from '../constants';
import { plow } from '../store/mapStateSlice';
import { plant } from '../store/gardenStateSlice';
import Tomato from '../plants/Tomato';
import { addAction, addMove } from '../store/timerSlice';
import audio from '../../audio';

const ControlsWrapper = (
    props: HTMLProps<HTMLDivElement> & {
        controlsWrapperRef: RefObject<HTMLDivElement>,
        gardenRef: RefObject<HTMLCanvasElement>,
    },
) => {
    const { children, controlsWrapperRef, gardenRef } = props;

    const currentCharacterPosition = useSelector((state: RootState) => state.characterPosition);
    const dispatch = useDispatch();

    const getCurrentCharacterTileNum = () => mapHelper.coordsToTileNum(
        currentCharacterPosition.coords,
    );

    const moves: Record<KeyboardEvent['code'], PayloadAction<void>> = {
        KeyW: up(),
        KeyA: left(),
        KeyS: down(),
        KeyD: right(),
        ArrowUp: up(),
        ArrowLeft: left(),
        ArrowDown: down(),
        ArrowRight: right(),
    };

    const actions: Record<KeyboardEvent['code'], PayloadAction<unknown>> = {
        Digit1: plow(getCurrentCharacterTileNum()),
        Digit2: plant({
            plant: new Tomato(gardenRef.current),
            tileNum: getCurrentCharacterTileNum(),
        }),
    };

    const keyPressHandler = (e: KeyboardEvent) => {
        const move = moves[e.code];
        const action = actions[e.code];
        const isModKey = (e.altKey || e.ctrlKey || e.metaKey);
        if (move && !isModKey) {
            e.preventDefault();
            audio({ src: constants.SOUNDS.steps });
            dispatch(addMove);
            dispatch(move);
        } else if (action && !isModKey) {
            e.preventDefault();
            dispatch(addAction);
            dispatch(action);
        }
    };

    return (
        <div
            ref={controlsWrapperRef}
            onKeyDown={keyPressHandler}
            role="presentation"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export default ControlsWrapper;
