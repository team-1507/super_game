import React, {
    KeyboardEvent, useEffect, useMemo, useState,
} from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';

import './Character.scss';

type Position = [number, number];

const Character = () => {
    const characterRef = React.createRef<HTMLCanvasElement>();
    const spriteSheet = useMemo(() => new SpriteSheet({ ...config, ...constants }), []);
    const { canvasWidth, canvasHeight } = spriteSheet;
    const [currentPosition, setCurrentPosition] = useState<Position>(
        [
            Math.ceil(spriteSheet.MAP_SIZE[0] / 2),
            Math.ceil(spriteSheet.MAP_SIZE[0] / 2),
        ],
    );
    const [currentMoveState, setCurrentMoveState] = useState(1);

    const getMoveStateCycleStep = (rangeStart: number, rangeEnd: number) => {
        if (currentMoveState >= rangeStart && currentMoveState <= (rangeEnd - 1)) {
            return (currentMoveState + 1);
        }
        return rangeStart;
    };

    const getNextMoveState = (newPosition: Position) => {
        if (newPosition[0] > currentPosition[0]) { // goes down
            return getMoveStateCycleStep(1, 4);
        }
        if (newPosition[0] < currentPosition[0]) { // goes up
            return getMoveStateCycleStep(13, 16);
        }
        if (newPosition[1] > currentPosition[1]) { // goes right
            return getMoveStateCycleStep(5, 8);
        }
        if (newPosition[1] < currentPosition[1]) { // goes left
            return getMoveStateCycleStep(9, 12);
        }
        return currentMoveState;
    };

    const redrawCharacter = (position: Position) => {
        characterRef.current?.getContext('2d')?.clearRect(0, 0, canvasWidth, canvasHeight);
        const newMoveState = getNextMoveState(position);
        setCurrentMoveState(newMoveState);
        setCurrentPosition(position);
    };

    const moveCharacter = (delta: Position) => {
        redrawCharacter([currentPosition[0] + delta[0], currentPosition[1] + delta[1]]);
    };

    const keyPressHandler = (e: KeyboardEvent) => {
        moveCharacter(constants.MOVES[e.code]);
    };

    useEffect(() => {
        spriteSheet.drawTile(currentMoveState, characterRef.current, currentPosition);
        characterRef.current?.focus();
    }, [currentPosition, characterRef, spriteSheet, currentMoveState]);
    return (
        <canvas
            ref={characterRef}
            id="ivan"
            width={canvasWidth}
            height={canvasHeight}
            onKeyDown={keyPressHandler}
            tabIndex={0}
        />
    );
};

export default Character;
