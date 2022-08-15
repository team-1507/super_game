/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as constants from '../constants';
import * as mapConfig from '../map/config';
import { SpriteSheet } from '../SpriteSheet';
import { Position } from './characterPositionSlice';

export type Direction = number;

const initialState: Direction = 1;

const spriteSheet = new SpriteSheet({ ...mapConfig, ...constants });

const currentPosition = useSelector((state: RootState) => state.characterPosition);

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        up: (position) => {
            if (spriteSheet.ifTileAvailible(position)) {
                position[0] -= 1;
            }
        },
        down: (position) => {
            if (spriteSheet.ifTileAvailible(position)) {
                position[0] += 1;
            }
        },
        left: (position) => {
            if (spriteSheet.ifTileAvailible(position)) {
                position[1] -= 1;
            }
        },
        right: (position) => {
            if (spriteSheet.ifTileAvailible(position)) {
                position[1] += 1;
            }
        },
        setPosition: (position, action: PayloadAction<Position>) => {
            if (spriteSheet.ifTileAvailible(action.payload)) {
                [position[0], position[1]] = action.payload;
            }
        },
    },
});

export const {
    up, down, left, right, setPosition,
} = characterSlice.actions;
export default characterSlice.reducer;
