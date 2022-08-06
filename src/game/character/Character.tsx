import React, {
    KeyboardEvent, RefObject, useEffect, useMemo, useState,
} from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';
import * as mapConfig from '../map/config';

import './Character.scss';

type Position = [number, number];

type CharacterProps = {
    container: RefObject<HTMLElement>,
    characterRef: RefObject<HTMLCanvasElement>,
};

const Character = (props: CharacterProps) => {
    const { container, characterRef } = props;
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

    const ifBoundry = (position: Position) => {
        const tileNum = spriteSheet.coordsToTileNum(position);
        return (mapConfig.BOUNDARIES[tileNum] !== 0);
    };

    const ifEndOfMap = (position: Position) => (
        position[0] <= 0
        || position[1] <= 0
        || position[0] > constants.MAP_SIZE[0]
        || position[1] > constants.MAP_SIZE[1]
    );

    const redrawCharacter = (position: Position) => {
        const newMoveState = getNextMoveState(position);
        setCurrentMoveState(newMoveState);
        if (!ifBoundry(position) && !ifEndOfMap(position)) {
            setCurrentPosition(position);
        }
    };

    const moveCharacter = (delta: Position) => {
        redrawCharacter([currentPosition[0] + delta[0], currentPosition[1] + delta[1]]);
    };

    const keyPressHandler = (e: KeyboardEvent) => {
        const move = constants.MOVES[e.code];
        const isModKey = (e.altKey || e.ctrlKey || e.metaKey);
        if (move && !isModKey) {
            e.preventDefault();
            moveCharacter(move);
        }
    };

    useEffect(() => {
        const scrollToFitCharacter = () => {
            if (!container.current) {
                return;
            }
            const charPosOnScreen = {
                top: (currentPosition[0] + 1) * constants.TILE_SIZE,
                left: (currentPosition[1] + 1) * constants.TILE_SIZE,
            };

            if (charPosOnScreen.left > window.innerWidth) {
                container.current.style.marginLeft = `${window.innerWidth - charPosOnScreen.left}px`;
            } else {
                container.current.style.marginLeft = '0px';
            }
            if (charPosOnScreen.top > window.innerHeight) {
                container.current.style.marginTop = `${window.innerHeight - charPosOnScreen.top}px`;
            } else {
                container.current.style.marginTop = '0px';
            }
        };

        const drawFrame = () => {
            scrollToFitCharacter();
            spriteSheet.drawTile(currentMoveState, characterRef.current, currentPosition, true);
        };

        window.requestAnimationFrame(drawFrame);
        characterRef.current?.focus();
    }, [
        currentPosition,
        characterRef,
        spriteSheet,
        currentMoveState,
        canvasHeight,
        canvasWidth,
        container,
    ]);
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
