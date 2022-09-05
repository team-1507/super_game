/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as constants from '../constants';
import * as mapConfig from '../map/config';
import { SpriteSheet } from '../SpriteSheet';

export type Position = {
    coords: [number, number];
    direction: number;
};

const initialState: Position = {
    coords: [5, 5],
    direction: 1,
};

const spriteSheet = new SpriteSheet({ ...mapConfig, ...constants });

const getMoveStateCycleStep = (rangeStart: number, rangeEnd: number, currentPosition: Position) => {
    if (currentPosition.direction >= rangeStart && currentPosition.direction <= (rangeEnd - 1)) {
        return (currentPosition.direction + 1);
    }
    return rangeStart;
};
const getNextMoveState = (newPosition: Position, currentPosition: Position) => {
    if (newPosition.coords[0] > currentPosition.coords[0]) { // goes down
        return getMoveStateCycleStep(1, 4, currentPosition);
    }
    if (newPosition.coords[0] < currentPosition.coords[0]) { // goes up
        return getMoveStateCycleStep(13, 16, currentPosition);
    }
    if (newPosition.coords[1] > currentPosition.coords[1]) { // goes right
        return getMoveStateCycleStep(5, 8, currentPosition);
    }
    if (newPosition.coords[1] < currentPosition.coords[1]) { // goes left
        return getMoveStateCycleStep(9, 12, currentPosition);
    }
    return currentPosition.direction;
};

const getNewDirectionAndCoords = (newPosition: Position, currentPosition: Position) => {
    const direction = getNextMoveState(newPosition, currentPosition);
    let { coords } = currentPosition;
    if (spriteSheet.ifTileAvailible(newPosition.coords)) {
        coords = newPosition.coords;
    }
    return { coords, direction };
};

export const characterPositionSlice = createSlice({
    name: 'characterPosition',
    initialState,
    reducers: {
        setPosition: (position: Position, action: PayloadAction<Position>) => {
            const newPosition = getNewDirectionAndCoords(action.payload, position);
            position.direction = newPosition.direction;
            [position.coords[0], position.coords[1]] = newPosition.coords;
        },
        up: (position) => {
            const newCoords: Position['coords'] = [...position.coords];
            newCoords[0] -= 1;
            const newPosition = getNewDirectionAndCoords(
                { ...position, coords: newCoords },
                position,
            );
            position.direction = newPosition.direction;
            [position.coords[0], position.coords[1]] = newPosition.coords;
        },
        down: (position) => {
            const newCoords: Position['coords'] = [...position.coords];
            newCoords[0] += 1;
            const newPosition = getNewDirectionAndCoords(
                { ...position, coords: newCoords },
                position,
            );
            position.direction = newPosition.direction;
            [position.coords[0], position.coords[1]] = newPosition.coords;
        },
        left: (position) => {
            const newCoords: Position['coords'] = [...position.coords];
            newCoords[1] -= 1;
            const newPosition = getNewDirectionAndCoords(
                { ...position, coords: newCoords },
                position,
            );
            position.direction = newPosition.direction;
            [position.coords[0], position.coords[1]] = newPosition.coords;
        },
        right: (position) => {
            const newCoords: Position['coords'] = [...position.coords];
            newCoords[1] += 1;
            const newPosition = getNewDirectionAndCoords(
                { ...position, coords: newCoords },
                position,
            );
            position.direction = newPosition.direction;
            [position.coords[0], position.coords[1]] = newPosition.coords;
        },
    },
});

export const {
    setPosition, up, down, left, right,
} = characterPositionSlice.actions;
export default characterPositionSlice.reducer;
